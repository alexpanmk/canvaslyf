using UnityEngine;
using System.Runtime.InteropServices;

public class PaintingProximity : MonoBehaviour
{
    [DllImport("__Internal")]
    private static extern void nearCanvas(string canvas);



    public Transform player;  // Drag and drop the player object here in the Inspector
    public float proximityDistance = 5.0f; // Distance at which the event will trigger

    void Update()
    {
        if (Vector3.Distance(player.position, transform.position) < proximityDistance)
        {
            OnPlayerNearPainting();
        }
    }

    void OnPlayerNearPainting()
    {
        nearCanvas(gameObject.name); // Call the JavaScript function with the painting's name

        // Trigger the event you want, e.g., display a UI element or interact with the painting
        Debug.Log("Player is near the painting!");
    }
}