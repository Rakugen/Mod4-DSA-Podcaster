class CreateEpisodes < ActiveRecord::Migration[5.2]
  def change
    create_table :episodes do |t|
      t.string :title
      t.string :description
      t.integer :runtime
      t.integer :episode_num
      t.string :audio_url
      t.integer :podcast_id

      t.timestamps
    end
  end
end
