# Memory Usage Monitoring Guide

This guide shows you how to monitor memory usage during development and build processes.

## Quick Methods

### 1. Windows Task Manager (Easiest)
- Press `Ctrl + Shift + Esc` to open Task Manager
- Go to the "Details" tab
- Find `node.exe` processes
- Check the "Memory" column to see memory usage

### 2. PowerShell Command (Real-time)
```powershell
# Check all Node.js processes
Get-Process node | Select-Object Id, @{Name="Memory(MB)";Expression={[math]::Round($_.WS / 1MB, 2)}}, CPU

# Monitor continuously (updates every 2 seconds)
while ($true) { Clear-Host; Get-Process node -ErrorAction SilentlyContinue | Format-Table Id, @{Name="Memory(MB)";Expression={[math]::Round($_.WS / 1MB, 2)}}, CPU; Start-Sleep -Seconds 2 }
```

### 3. Using the Monitoring Script
```powershell
# Run the PowerShell monitoring script
.\scripts\check-memory.ps1
```

### 4. During Build (with monitoring)
```bash
# Use the Node.js monitoring script
npm run build:monitor
```

## Detailed Memory Information

### Check System Memory
```powershell
# Total system memory
(Get-CimInstance Win32_ComputerSystem).TotalPhysicalMemory / 1GB

# Current memory usage
$os = Get-CimInstance Win32_OperatingSystem
$used = ($os.TotalVisibleMemorySize - $os.FreePhysicalMemory) * 1024 / 1GB
$total = $os.TotalVisibleMemorySize * 1024 / 1GB
Write-Host "Used: $([math]::Round($used, 2)) GB / $([math]::Round($total, 2)) GB"
```

### Check Node.js Process Memory
```powershell
# Get detailed memory info for Node.js
Get-Process node | Select-Object Id, ProcessName, 
    @{Name="WorkingSet(MB)";Expression={[math]::Round($_.WorkingSet / 1MB, 2)}},
    @{Name="PrivateMemory(MB)";Expression={[math]::Round($_.PrivateMemorySize64 / 1MB, 2)}},
    @{Name="VirtualMemory(MB)";Expression={[math]::Round($_.VirtualMemorySize64 / 1MB, 2)}}
```

## During Build Process

### Method 1: Run build with monitoring script
```bash
npm run build:monitor
```

### Method 2: Manual monitoring in separate terminal
1. Open a new PowerShell window
2. Run: `.\scripts\check-memory.ps1`
3. In another terminal, run: `npm run build`

### Method 3: Use Windows Performance Monitor
1. Press `Win + R`, type `perfmon` and press Enter
2. Click "Performance Monitor"
3. Add counters for:
   - Process > Working Set > node.exe
   - Memory > Available MBytes
   - Memory > % Committed Bytes In Use

## Understanding Memory Metrics

- **RSS (Resident Set Size)**: Total memory allocated to the process
- **Heap Total**: Total heap memory allocated
- **Heap Used**: Memory actually used in the heap
- **Working Set**: Physical memory currently used by the process
- **Private Memory**: Memory exclusively used by the process

## Troubleshooting High Memory Usage

If memory usage is too high:

1. **Increase Node.js memory limit** (already set to 4GB):
   ```json
   "build": "cross-env NODE_OPTIONS=\"--max-old-space-size=8192\" next build"
   ```

2. **Clear Next.js cache**:
   ```bash
   rm -rf .next
   npm run build
   ```

3. **Build in production mode**:
   ```bash
   NODE_ENV=production npm run build
   ```

4. **Check for memory leaks**:
   - Monitor memory over time
   - Look for continuous growth
   - Check if memory is released after build completes

## Quick Memory Check Commands

```powershell
# One-liner to check Node.js memory
Get-Process node -ErrorAction SilentlyContinue | Measure-Object WorkingSet -Sum | Select-Object @{Name="TotalMemory(MB)";Expression={[math]::Round($_.Sum / 1MB, 2)}}

# Check system memory percentage
$os = Get-CimInstance Win32_OperatingSystem; [math]::Round((($os.TotalVisibleMemorySize - $os.FreePhysicalMemory) / $os.TotalVisibleMemorySize) * 100, 2)
```

