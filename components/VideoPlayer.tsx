import React from 'react'

const VideoPlayer = ({ platform, source }: {platform: string; source: string}) => {
    let uri = 'https://' + source

    if (platform === 'BunnyPlayer') {
        return (
                <iframe src={uri} loading="lazy" allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;" allowFullScreen title="videoplayer" className="w-full aspect-video"></iframe>
        )
    }else if (platform === 'YouTube') {
        return (
            <div className="aspect-w-9 aspect-h-5">
                <iframe src={uri} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full aspect-video"></iframe>
            </div>
        )
    }else if (platform === 'clappr') {
        return (
            <div className="aspect-w-9 aspect-h-5">
                <iframe src={uri} title="video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full aspect-video"></iframe>
            </div>
        )
    }else{
        return (
            <div>Oops... Something went wrong!</div>
        )
    }
    
}

export default VideoPlayer
