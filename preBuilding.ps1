Write-Host "Start pre building..."

$json = (Get-Content app.JSON -Raw)| ConvertFrom-Json | Select displayName

if(Test-Path android){
	
	adb uninstall (('com.' +  $json.psobject.properties.value).ToLower())

	if(Test-Path android\build){
		 Write-Host "Deleting android/build"
		Remove-Item  android\build -recurse -force -confirm:$false
	}
		
	if(Test-Path android\app\build){
		Write-Host "Deleting android/app/build"
		Remove-Item  android\app\build -recurse -force -confirm:$false
	}
	
	
	$FOLDERLISTS = (Get-ChildItem -Path node_modules -Recurse | Where-Object {  ($_.PSIsContainer -eq $true) -and ($_.Name -like "android") -and ( $_.mode -match "d")}).fullname

	foreach ($FOLDERLIST in $FOLDERLISTS)
	{

	$FOLDERBUILD = (Get-ChildItem $FOLDERLIST | Where-Object {  ($_.PSIsContainer -eq $true) -and ($_.Name -match "build") -and ( $_.mode -match "d")}).fullname

		if( $FOLDERBUILD -and (Test-Path $FOLDERBUILD) ){
			Write-Host "Deleting " $_.FullName
			Remove-Item  $_.FullName -recurse -force -confirm:$false
		}
	}
	
	
} else{
	react-native eject
}
Write-Host "Finishing pre building"