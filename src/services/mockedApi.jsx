import { useEffect, useState } from 'react'

export function useFetch(urlApi, userId) {
  const [data, setData] = useState({})
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!userId) return

    setLoading(true)
    async function fetchData() {
      try {
        const response = await fetch(`/dataMocked/${urlApi}`, {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        })
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          )
        }
        const dataMocked = await response.json()
        setData(
          dataMocked.find(
            (item) =>
              item.id === parseInt(userId) || item.userId === parseInt(userId)
          )
        )
      } catch (err) {
        console.log(err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [urlApi, userId])

  return { data, isLoading, error }
}
