aws s3 sync ./ s3://kaboodle --acl public-read  --exclude "*.swp" --exclude ".git/*"
