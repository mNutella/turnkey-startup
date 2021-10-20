export default function useUrlHelper() {
  const getParams = () => {
    const queryString = window.location.search
    const params = new URLSearchParams(queryString)

    return params
  }

  return {
    getParams
  }
}
