styleContent = ''
timeTypes = ['Second', 'Minute', 'Hour']
lastTime = 0
date = new Date()

for timeType in timeType
  time = date["get#{timeType}s"]()
  time -= 12 if timeType is 'Hour' and time > 12
  time += lastTime / 60
  lastTime = time
  startAngle = time / (if timeType is 'Hour' then 12 else 60) * 360
  styleContent += """
                  @keyframes #{timeType.toLowerCase()}Hand {
                    from {
                      transform:rotate(#{startAngle}deg);
                    }
                    to {
                      transform:rotate(#{startAngle + 360}deg);
                    }
                  }
                  """
style = document.createElement("style")
style.textContent = styleContent
document.head.appendChild style