current_user_stacked_work_ids = (current_user ? current_user.stacks.map(&:artwork_id) : [])

json.extract! @artwork, :id, :title, :image, :art_type, :created_at
json.image @artwork.image.url(:large)
json.full_size_url @artwork.image.url

json.height @artwork.scaled_height_by_width(300)

json.artist_name @artwork.artist.name
json.artist_id @artwork.artist.id

json.uploader_id @artwork.uploader.id
json.uploader_moniker User.moniker(@artwork.uploader)

if current_user_stacked_work_ids.include?(@artwork.id)
  json.stacked true
  json.stack_id Stack.find_by(artwork_id: @artwork.id, user_id: current_user.id).id
else
  json.stacked false
end

# good
