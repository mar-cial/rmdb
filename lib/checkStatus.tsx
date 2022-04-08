import { FC } from "react"

const checkStatus = (status: string) => {
  // formatted status
  const fstatus = status.trim().toLowerCase()
  
  switch (fstatus) {
    case 'alive':
      return <p className="bg-green-300">Alive</p>
    case 'dead':
      return <p className="bg-red-300">Dead</p>
    case 'unknown':
      return <p className="bg-gray-300">Unknown</p>
    default: 
      return <p className="bg-gray-300">Unknown</p>
  }
}

export default checkStatus