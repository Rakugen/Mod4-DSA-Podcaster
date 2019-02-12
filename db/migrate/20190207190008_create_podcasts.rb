class CreatePodcasts < ActiveRecord::Migration[5.2]
  def change
    create_table :podcasts do |t|
      t.string :title
      t.string :description
      t.integer :num_episodes
      t.string :img_url
      t.string :thumbnail
      t.string :genres
      t.string :publisher
      t.string :rss

      t.timestamps
    end
  end
end
