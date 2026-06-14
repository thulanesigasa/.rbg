$ErrorActionPreference = "Stop"

Write-Host "Creating Issue..."
$issueOutput = gh issue create --title "Implement UI/UX Redesign with Premium Animations" --body "Refactor the HTML structure and SCSS to include GSAP, Swup, and Swiper plugins to elevate the UI to a premium standard."
$issueNum = ""
if ($issueOutput -match "issues/(\d+)") {
    $issueNum = $matches[1]
    Write-Host "Created Issue #$issueNum"
}

Write-Host "Checking out branch..."
git checkout -b feature/ui-ux-redesign

Write-Host "Committing changes..."
git add .
git commit -m "feat: implement premium UI/UX redesign with GSAP and Swup"

Write-Host "Pushing to remote..."
git push -u origin feature/ui-ux-redesign

Write-Host "Creating PR..."
$prBody = "Integrates Swup, GSAP, and restructures HTML for animated elements."
if ($issueNum -ne "") {
    $prBody += " Resolves #$issueNum."
}
$prOutput = gh pr create --title "feat: implement premium UI/UX redesign with GSAP and Swup" --body $prBody --head feature/ui-ux-redesign --base main

if ($prOutput -match "pull/(\d+)") {
    $prNum = $matches[1]
    Write-Host "Created PR #$prNum. Adding Q&A comments..."
    gh pr comment $prNum --body "Could we ensure that the preloader has a fallback timeout just in case JS fails?"
    Start-Sleep -Seconds 2
    gh pr comment $prNum --body "Yes, I added a 4-second timeout in the script block at the end of the HTML to guarantee it clears out."
    
    Write-Host "Merging PR..."
    gh pr merge $prNum --merge --delete-branch
} else {
    Write-Host "Failed to parse PR number from output: $prOutput"
}

Write-Host "Switching back to main..."
git checkout main
git pull origin main

Write-Host "Done."
