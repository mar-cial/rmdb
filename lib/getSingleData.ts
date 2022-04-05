const getSingleData = async (url: string) => {
  try {
    const res = await fetch(url)
    const data = await res.json()
    
    return data
  } catch (e) {
    console.log(e)
  }
}

export default getSingleData
