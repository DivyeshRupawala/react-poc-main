const topics = {}

export function subscribe(topic, viewId, fn) {
  if (!topics[topic]) {
    topics[topic] = {}
  }

  const id = viewId;
  topics[topic][id] = fn
  return () => {
    topics[topic][id] = null
    delete topics[topic][id]
  }
}
export function publish(topic, args) {
  if (!topics[topic]) {
    return
  }
  
  Object.values(topics[topic]).forEach(fn => {
    if (fn) fn(args)
  })
}