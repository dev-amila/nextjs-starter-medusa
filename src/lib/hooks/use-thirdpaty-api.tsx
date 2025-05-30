// // hooks/useThirdPartyData.ts
// import { useState, useEffect } from "react"
// import { fetchThirdPartyData } from "../lib/thirdPartyApi"

// export const useThirdPartyData = (params = {}) => {
//   const [data, setData] = useState(null)
//   const [isLoading, setIsLoading] = useState(true)
//   const [error, setError] = useState(null)

//   useEffect(() => {
//     const loadData = async () => {
//       try {
//         const result = await fetchThirdPartyData(params)
//         setData(result)
//       } catch (err) {
//         setError(err)
//       } finally {
//         setIsLoading(false)
//       }
//     }

//     loadData()
//   }, [JSON.stringify(params)]) // Compare params as string

//   return { data, isLoading, error }
// }