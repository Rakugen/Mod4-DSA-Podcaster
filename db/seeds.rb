# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# https://listennotes.p.rapidapi.com/api/v1/curated_podcasts?page=1

# https://listennotes.p.rapidapi.com/api/v1/podcasts/
# https://listennotes.p.rapidapi.com/api/v1/episodes/
require 'unirest'

def get_podcast_ids(array)
  response = Unirest.get "https://listennotes.p.rapidapi.com/api/v1/curated_podcasts",
  headers:{
    "X-RapidAPI-Key" => "241bab741dmsh0f74711cc57f299p1b30f0jsn32155b936037"
  }

  response.body["curated_lists"].each do |list|
    list["podcasts"].each do |podcast|
      array << podcast["id"]
    end
  end
end

def get_podcast_info(array)
  array.each do |id|
    response = Unirest.get "https://listennotes.p.rapidapi.com/api/v1/podcasts/#{id}",
    headers:{
      "X-RapidAPI-Key" => "bfadf59a9emsh9cad689cca1ff36p18e198jsn4be035320101"
    }
    podcast = Podcast.find_or_create_by(
      title: response.body["title"],
      num_episodes: response.body["total_episodes"],
      description: response.body['description'],
      img_url: response.body["image"],
      thumbnail: response.body["thumbnail"],
      genres: response.body["genres"],
      publisher: response.body["publisher"],
      rss: response.body["rss"]
    )
    episodes = response.body["episodes"]
    episodes.each_with_index do |episode, i|
      puts i
      Episode.find_or_create_by(
      title: episode['title'],
      description: episode['description'],
      runtime: episode['audio_length'],
      episode_num: response.body['total_episodes'] - i,
      audio_url: episode['audio'],
      podcast_id: podcast.id
      )
    end
  end
end

def run
  id_array = []
  puts "Grabbing Curated Lists"
  get_podcast_ids(id_array)
  puts "Finished Fetching Curated Lists"
  get_podcast_info(id_array)
end

run
puts "DONE!"
