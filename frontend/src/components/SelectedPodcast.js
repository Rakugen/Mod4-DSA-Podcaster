import React from 'react';
import EpisodeContainer from './EpisodeContainer'

const SelectedPodcast = ({podcast, show, allPodcast, handleEpisodeMenuClick, lastEpisodeIndex, firstEpisodeIndex, addMoreEpisodes, backEpisodes}) => {
  const clickedPodcast =
  <div className="navbar">
  <h1>{podcast.title}</h1>
  <p>{podcast.description}</p>
  <div>
  {
    <EpisodeContainer
    lastEpisodeIndex={lastEpisodeIndex}
    firstEpisodeIndex={firstEpisodeIndex}
    addMoreEpisodes={addMoreEpisodes}
    backEpisodes={backEpisodes}
    handleEpisodeMenuClick={handleEpisodeMenuClick}
    episodes={podcast.episodes}/>
  }
  </div>
</div>

  const defaultPodcast =
  <div className="navbar">
  <h1>Hi</h1>
  </div>

  console.log(podcast)
  return(
    show === true ? clickedPodcast : defaultPodcast

    )
}

export default SelectedPodcast
