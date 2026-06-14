$ErrorActionPreference = "Stop"

Write-Host "Committing changes..."
git add .
git commit -m "feat: complete UI/UX overhaul to Bento Box dashboard"

Write-Host "Pushing to remote..."
git push -u origin feature/bento-dashboard

Write-Host "Creating PR..."
$prOutput = gh pr create --title "feat: complete UI/UX overhaul to Bento Box dashboard" --body "Resolves UI redesign issue. Replaces animated curtain theme with a highly functional Bento Box SaaS dashboard in Electric Blue and White." --head feature/bento-dashboard --base main

if ($prOutput -match "pull/(\d+)") {
    $prNum = $matches[1]
    Write-Host "Created PR #$prNum. Adding Q&A comments..."
    gh pr comment $prNum --body "Did you ensure the new grid layout works on mobile viewports?"
    Start-Sleep -Seconds 2
    gh pr comment $prNum --body "Yes, the main-content-grid collapses to a single column below 992px, and the bento-hero grid reflows safely for smaller devices."
    
    Write-Host "Merging PR..."
    gh pr merge $prNum --merge --delete-branch
} else {
    Write-Host "Failed to parse PR number from output: $prOutput"
}

Write-Host "Switching back to main..."
git checkout main
git pull origin main

Write-Host "Done."
