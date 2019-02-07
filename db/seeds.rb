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

response_arr = []
curated_list = ['ot4KVxWULN6', 'HUSDaXf8l_w', '013d02341f0f4926a8646537d78e7840',
                '1Ah3C-bBz0n', 'EXxUSmqa8H1']

def curated_podcasts_hash
  response = Unirest.post "https://listennotes.p.rapidapi.com/api/v1/podcasts/9d6939745ed34e3aab0eb78a408ab40d?next_episode_pub_date=1479154463000&sort=recent_first",
  headers:{
    "X-RapidAPI-Key" => "bfadf59a9emsh9cad689cca1ff36p18e198jsn4be035320101"
  }
  # url = 'https://listennotes.p.rapidapi.com/api/v1/curated_podcasts?page=1'
  # response = RestClient.get(url)
  puts response.body

  # JSON.parse(response)
end

curated_podcasts_hash
