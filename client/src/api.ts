import axios from "axios"

export const getTodos = async () => {
  try {
    const res = await axios.get(`http://localhost:5000`)
    return res.data
  } catch (error) {
    console.log("Error request todos", error)
    return {}
  }
}
