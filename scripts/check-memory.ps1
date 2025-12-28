# PowerShell script to monitor memory usage during build
# Usage: .\scripts\check-memory.ps1

Write-Host "🔍 Monitoring Memory Usage..." -ForegroundColor Cyan
Write-Host ""

# Get system memory info
$totalMemory = (Get-CimInstance Win32_ComputerSystem).TotalPhysicalMemory
$totalMemoryGB = [math]::Round($totalMemory / 1GB, 2)

Write-Host "System Memory:" -ForegroundColor Yellow
Write-Host "  Total RAM: $totalMemoryGB GB"

# Monitor Node.js processes
Write-Host ""
Write-Host "Node.js Processes:" -ForegroundColor Yellow

while ($true) {
    Clear-Host
    Write-Host "🔍 Memory Monitor (Press Ctrl+C to stop)" -ForegroundColor Cyan
    Write-Host "========================================" -ForegroundColor Cyan
    Write-Host ""
    
    # System memory
    $os = Get-CimInstance Win32_OperatingSystem
    $usedMemory = $os.TotalVisibleMemorySize - $os.FreePhysicalMemory
    $usedMemoryGB = [math]::Round(($usedMemory * 1024) / 1GB, 2)
    $freeMemoryGB = [math]::Round(($os.FreePhysicalMemory * 1024) / 1GB, 2)
    $percentUsed = [math]::Round(($usedMemory / $os.TotalVisibleMemorySize) * 100, 2)
    
    Write-Host "System Memory:" -ForegroundColor Yellow
    Write-Host "  Total: $totalMemoryGB GB"
    Write-Host "  Used: $usedMemoryGB GB ($percentUsed%)"
    Write-Host "  Free: $freeMemoryGB GB"
    Write-Host ""
    
    # Node.js processes
    $nodeProcesses = Get-Process -Name node -ErrorAction SilentlyContinue | 
        Select-Object Id, @{Name="Memory(MB)";Expression={[math]::Round($_.WS / 1MB, 2)}}, 
        @{Name="CPU(%)";Expression={$_.CPU}}, ProcessName
    
    if ($nodeProcesses) {
        Write-Host "Node.js Processes:" -ForegroundColor Yellow
        $nodeProcesses | Format-Table -AutoSize
        $totalNodeMemory = ($nodeProcesses | Measure-Object -Property "Memory(MB)" -Sum).Sum
        Write-Host "  Total Node.js Memory: $([math]::Round($totalNodeMemory, 2)) MB" -ForegroundColor Green
    } else {
        Write-Host "No Node.js processes running" -ForegroundColor Gray
    }
    
    Write-Host ""
    Write-Host "Refreshing in 3 seconds..." -ForegroundColor Gray
    Start-Sleep -Seconds 3
}

