using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System.Runtime.InteropServices;

public class Player : MonoBehaviour
{
    [SerializeField] Transform cameraTransform;
    [SerializeField] float mouseSensitivity = 3f;
    [SerializeField] float movementSpeed = 3f;

    Vector2 look;
    bool isMouseInputEnabled = true;
    bool isCursorLocked = true; // Track the lock state of the cursor

    void Awake()
    {
#if UNITY_WEBGL == true && UNITY_EDITOR == false
        WebGLInput.captureAllKeyboardInput = false;
#endif
    }

    void Start()
    {
        LockCursor();
    }

    void Update()
    {
        // Check if the Escape key is pressed to toggle cursor lock
        if (Input.GetKeyDown(KeyCode.Escape))
        {
            if (isCursorLocked)
            {
                UnlockCursor();
            }
            else
            {
                LockCursor();
            }
        }

        // Lock WebGL input when the cursor is locked
        if (isCursorLocked)
        {
#if UNITY_WEBGL == true && UNITY_EDITOR == false
            WebGLInput.captureAllKeyboardInput = true; // Enable keyboard input capture when the cursor is locked
#endif
        }
        else
        {
#if UNITY_WEBGL == true && UNITY_EDITOR == false
            WebGLInput.captureAllKeyboardInput = false; // Disable keyboard input capture when the cursor is unlocked
#endif
        }

        // Check for mouse click to re-enable mouse input and lock the cursor
        if (!isMouseInputEnabled && Input.GetMouseButtonDown(0)) // Left mouse click
        {
            LockCursor();
        }

        // Only allow movement and look if mouse input is enabled
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

    void UpdateLook()
    {
        look.x += Input.GetAxis("Mouse X") * mouseSensitivity;
        look.y += Input.GetAxis("Mouse Y") * mouseSensitivity;
        look.y = Mathf.Clamp(look.y, -90, 90);
        cameraTransform.localRotation = Quaternion.Euler(-look.y, 0, 0);
        transform.localRotation = Quaternion.Euler(0, look.x, 0);
    }

    void LockCursor()
    {

        Cursor.lockState = CursorLockMode.Locked; // Lock the cursor to the center of the screen
        Cursor.visible = false; // Hide the cursor
        isMouseInputEnabled = true; // Enable mouse input
        isCursorLocked = true; // Update the lock state flag
    }

    void UnlockCursor()
    {

        Cursor.lockState = CursorLockMode.None; // Unlock the cursor
        Cursor.visible = true; // Show the cursor
        isMouseInputEnabled = false; // Disable mouse input
        isCursorLocked = false; // Update the lock state flag
    }
}