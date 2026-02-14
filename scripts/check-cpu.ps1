# PowerShell script to monitor CPU and memory usage
# Usage: .\scripts\check-cpu.ps1

Write-Host "🔍 Monitoring CPU and Memory Usage..." -ForegroundColor Cyan
Write-Host ""

# Get system info
$totalMemory = (Get-CimInstance Win32_ComputerSystem).TotalPhysicalMemory
$totalMemoryGB = [math]::Round($totalMemory / 1GB, 2)

Write-Host "System Information:" -ForegroundColor Yellow
Write-Host "  Total RAM: $totalMemoryGB GB"
Write-Host ""

# Monitor processes
while ($true) {
    Clear-Host
    Write-Host "🔍 CPU & Memory Monitor (Press Ctrl+C to stop)" -ForegroundColor Cyan
    Write-Host "=============================================" -ForegroundColor Cyan
    Write-Host ""
    
    # System memory
    $os = Get-CimInstance Win32_OperatingSystem
    $usedMemory = $os.TotalVisibleMemorySize - $os.FreePhysicalMemory
    $usedMemoryGB = [math]::Round(($usedMemory * 1024) / 1GB, 2)
    $freeMemoryGB = [math]::Round(($os.FreePhysicalMemory * 1024) / 1GB, 2)
    $percentUsed = [math]::Round(($usedMemory / $os.TotalVisibleMemorySize) * 100, 2)
    
    # CPU usage
    $cpu = Get-Counter '\Processor(_Total)\% Processor Time'
    $cpuPercent = [math]::Round($cpu.CounterSamples[0].CookedValue, 2)
    
    Write-Host "System Resources:" -ForegroundColor Yellow
    Write-Host "  CPU Usage: $cpuPercent%"
    Write-Host "  Memory Used: $usedMemoryGB GB ($percentUsed%)"
    Write-Host "  Memory Free: $freeMemoryGB GB"
    Write-Host ""
    
    # Node.js processes (excluding TypeScript server)
    $nodeProcesses = Get-Process -Name node -ErrorAction SilentlyContinue | 
        Where-Object { 
            $cmd = (Get-WmiObject Win32_Process -Filter "ProcessId = $($_.Id)" -ErrorAction SilentlyContinue).CommandLine;
            $cmd -and $cmd -notlike "*tsserver*" -and $cmd -notlike "*typingsInstaller*"
        } |
        Select-Object Id, 
            @{Name="CPU(s)";Expression={$_.CPU}}, 
            @{Name="Memory(MB)";Expression={[math]::Round($_.WS / 1MB, 2)}}, 
            @{Name="CPU%";Expression={$_.CPU / (Get-Date).TimeOfDay.TotalSeconds * 100}},
            ProcessName
    
    if ($nodeProcesses) {
        Write-Host "Application Node.js Processes:" -ForegroundColor Yellow
        $nodeProcesses | Format-Table -AutoSize
        $totalNodeMemory = ($nodeProcesses | Measure-Object -Property "Memory(MB)" -Sum).Sum
        Write-Host "  Total Application Memory: $([math]::Round($totalNodeMemory, 2)) MB" -ForegroundColor Green
    } else {
        Write-Host "No application Node.js processes running" -ForegroundColor Gray
    }
    
    Write-Host ""
    Write-Host "Next.js/PM2 Processes:" -ForegroundColor Yellow
    $nextProcesses = Get-Process -Name node -ErrorAction SilentlyContinue | 
        Where-Object { 
            $cmd = (Get-WmiObject Win32_Process -Filter "ProcessId = $($_.Id)" -ErrorAction SilentlyContinue).CommandLine;
            $cmd -and ($cmd -like "*next*" -or $cmd -like "*pm2*" -or $cmd -like "*npm*")
        } |
        Select-Object Id, 
            @{Name="CPU(s)";Expression={$_.CPU}}, 
            @{Name="Memory(MB)";Expression={[math]::Round($_.WS / 1MB, 2)}}, 
            ProcessName
    
    if ($nextProcesses) {
        $nextProcesses | Format-Table -AutoSize
    } else {
        Write-Host "  No Next.js/PM2 processes found" -ForegroundColor Gray
    }
    
    Write-Host ""
    Write-Host "Refreshing in 3 seconds..." -ForegroundColor Gray
    Start-Sleep -Seconds 3
}
