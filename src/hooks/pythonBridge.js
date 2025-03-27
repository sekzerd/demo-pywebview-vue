// import { useState, useEffect } from 'react'
import { ref, reactive,watchEffect} from 'vue';

export function usePythonState(propName) {
  // const [propValue, setPropValue] = useState()
  const ret  =  reactive({});
  
  watchEffect(() => {
    window.addEventListener('pywebviewready', function() {
      if (!window.pywebview.state) {
        window.pywebview.state = {}
      }
      window.pywebview.state[`set_${propName}`] = ret
    })
  }, [])

  return ret
}

export function usePythonApi(apiName, apiContent) {
  window.pywebview.api = window.pywebview.api || {}
  window.pywebview.api[apiName](apiContent)
}
