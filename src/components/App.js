import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import UseVideos from '../hooks/useVideos';
import useVideos from '../hooks/useVideos';

const App = () => {
  const [selectedVideo, setSelectedVideo] = React.useState(null);
  const [videos, search] = useVideos('Cristian Chiaburu');
  React.useEffect(() => {
    setSelectedVideo(videos[1]);
  }, [videos]);

  return (
    <div className='ui container'>
      <SearchBar onFormSubmit={search} />
      <div className='ui grid'>
        <div className='ui row'>
          <div className='eleven wide column'>
            <VideoDetail video={selectedVideo} />
          </div>
          <div className='five wide column'>
            <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

// AIzaSyA-DYrq-PriIJQ3qEgvU9MqNQ9LDmtav8Y
