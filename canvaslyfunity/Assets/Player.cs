using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Player : MonoBehaviour
{
    // Start is called before the first frame update
    [SerializeField] Transform cameraTransform;
    [SerializeField] float mouseSensitivity = 3f;
    [SerializeField] float movementSpeed = 3f;


    Vector2 look;
    bool isMouseInputEnabled = true;


    void Start()
    {
        Cursor.lockState = CursorLockMode.Locked;
        Cursor.visible = false;  // Hide the cursor
    }

    void Update()
    {
        if (Input.GetKeyDown(KeyCode.Escape))
        {
            UnlockCursor();
        }
        // Check for mouse click to re-enable mouse input
        if (!isMouseInputEnabled && Input.GetMouseButtonDown(0)) // Left mouse click
        {
            LockCursor(); // Lock the cursor again and re-enable mouse input
        }

        if (isMouseInputEnabled)
        {
            UpdateLook();
        }

        UpdateMovement();
    }

    void UpdateMovement()
    {
        Vector3 move = new Vector3(Input.GetAxis("Horizontal"), 0, Input.GetAxis("Vertical"));
        move = transform.TransformDirection(move);
        move.y = 0;

        transform.position += move * Time.deltaTime * movementSpeed;
    }

    void LockCursor()
    {
        Cursor.lockState = CursorLockMode.Locked; // Lock the cursor to the center of the screen
        Cursor.visible = false; // Hide the cursor
        isMouseInputEnabled = true; // Enable mouse input
    }

    void UnlockCursor()
    {
        Cursor.lockState = CursorLockMode.None; // Unlock the cursor
        Cursor.visible = true; // Show the cursor
        isMouseInputEnabled = false; // Disable mouse input
    }
    // Update is called once per frame
    void UpdateLook()
    {
        look.x += Input.GetAxis("Mouse X") * mouseSensitivity;
        look.y += Input.GetAxis("Mouse Y") * mouseSensitivity;

        look.y = Mathf.Clamp(look.y, -90, 90);

        cameraTransform.localRotation = Quaternion.Euler(-look.y, 0, 0);
        transform.localRotation = Quaternion.Euler(0, look.x, 0);
    }
}
