import { Stream } from '@cloudflare/stream-react'

const VideoPlayer = ({ type, source }) => {
    let uri = 'https://' + source

    if (type === 'BunnyPlayer') {
        return (
            <div class="aspect-w-9 aspect-h-5">
                <iframe src={uri} loading="lazy" allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;" allowfullscreen title="videoplayer"></iframe>
            </div>
        )
    }else if (type === 'YouTube') {
        return (
            <div class="aspect-w-9 aspect-h-5">
                <iframe src={uri} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        )
    }else if (type === 'Cloudflare'){
            <Stream controls src={source} />
    }else{
        return (
            <div>Oops... Something went wrong!</div>
        )
    }
    
}

export default VideoPlayer