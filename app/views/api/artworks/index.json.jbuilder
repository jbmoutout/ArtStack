current_user_stacked_work_ids = (current_user ? current_user.stacks.map(&:artwork_id) : [])

json.array! @artworks do |artwork|
  json.extract! artwork, :id, :title, :image, :art_type, :created_at
  json.image artwork.image.url(:small)

  json.artist do
    json.extract! artwork.artist, :id, :name
  end

  json.stacked current_user_stacked_work_ids.include?(artwork.id)

end

# good
