using UnityEngine;

public class Example : MonoBehaviour
{
  void Awake()
  {
#if UNITY_WEBGL == true && UNITY_EDITOR == false
    WebGLInput.captureAllKeyboardInput = false;
#endif
  }
}