const importAll = (r) => {
  return r.keys().map((data) => ({
    name: data.split('./').slice(-1)[0].split('.')[0].toUpperCase(),
    data: r(data)
  }))
}

const images = () => {
  const listImage = importAll(require.context('@kun-assets/images/',));
  return listImage.reduce((p, c) => ({
    ...p,
    [c.name]: c.data
  }), {})
}

export default images();