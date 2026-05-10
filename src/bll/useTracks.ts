import { useEffect, useState } from "react"
import type { Track } from "../dal/types"
import { getTracks } from "../dal/api"

export function useTracks() {
  const [tracks, setTracks] = useState<Track[] | null>(null)

  useEffect(() => {
    getTracks()
      .then(json => {
        setTracks(json.data)
      })
  }, [])

  return {
    tracks
  }
}