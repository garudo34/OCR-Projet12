import { useEffect, useState } from 'react'

export function useFetch(urlApi) {
  const [data, setData] = useState({})
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!urlApi) return
    setLoading(true)
    async function fetchData() {
      try {
        const response = await fetch(urlApi)
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          )
        }
        const { data } = await response.json()
        setData(data)
      } catch (err) {
        console.log(err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [urlApi])

  return { isLoading, data, error }
}
