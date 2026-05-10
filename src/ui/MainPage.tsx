import { PageTitle } from "./PageTitle.tsx"
import { TrackDetails } from "./TrackDetails.tsx"
import { Playlist } from "./Playlist.tsx"
import { useTrackSelection } from "../bll/useTrackSelection.ts"

export function MainPage() {
  const {handleTrackSelect, selectedTrackId} = useTrackSelection()

  return <div>
    <PageTitle value={'Musicfun Player'} />
    <Playlist selectedTrackId={selectedTrackId} onTrackSelect={handleTrackSelect} />
    <hr />
    <TrackDetails selectedTrackId={selectedTrackId} />
  </div>
}