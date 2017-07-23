const randomColor = (min, max) => {
  let chosenColours = []
  const maxColours = 5
  const limits = { min: 0, max: 5 }
  const random = Math.floor(Math.random() * (limits.max - limits.min + 1)) + limits.min

  // Reset colour arrays if it reached the maximum colour range
  if (chosenColours.length === maxColours) chosenColours = []

  // Avoid repeated colours for the defined number of maxColours
  if (chosenColours.indexOf(random) !== -1) return randomColor(limits.min, limits.max)

  // Just record which colour was gotten, duh
  chosenColours.push(random)
  console.log(chosenColours)
  return random
}

hexo.extend.helper.register('random_color', () => randomColor(0,5))
