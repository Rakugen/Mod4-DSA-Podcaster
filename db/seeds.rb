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

test_id = ["2914b3dbd9d24e60b5073ac64c10fd6f", "9a08629f7a8f4251a56c0c41f8f8a92a", "99a8f88389c54382a300a363c74e9f26",
"ab9cdf85fcaa4e7d8f31c535d3d622a0", "1494f6eabc3b4aa082e0eb48f80136c6", "04e2c4834802460a83a1bfb1bf1ad318", "ba66002d91e647d7a7da4d2affdd28a4",
"85ebe25861b64ea58d851d55f2b9019e", "8d8970470ead450aa5a9d2a1d223d938", "589c5558ab6648b48f97406e9262c389"]
response_arr = []

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
    puts episodes
    episodes.each_with_index do |episode, i|

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
  get_podcast_ids(id_array)
  get_podcast_info(id_array)
end

run
