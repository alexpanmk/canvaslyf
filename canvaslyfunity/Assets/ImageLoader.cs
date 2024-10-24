using UnityEngine;
using UnityEngine.UI;
using System.Collections;

public class ImageLoader : MonoBehaviour
{
    public RawImage galleryImage;
    public RawImage galleryImage2;
    public RawImage galleryImage3;
    public RawImage galleryImage4;
    public RawImage galleryImage5;
    public RawImage galleryImage6;
    public RawImage galleryImage7;
    public RawImage galleryImage8;


    // Reference to the RawImage component

    // Start is called before the first frame update
    void Start()
    {



        // Test with an example image URL
        string imageUrl = "https://firebasestorage.googleapis.com/v0/b/canvaslyf.appspot.com/o/artworks%2FFJgqSnKG9hGamTOaaxUT%2Fhealingland.jpg.png?alt=media&token=e1ab41c0-6dab-46c1-b9bd-8bc0f5dd2760";
        StartCoroutine(LoadImageFromUrl(galleryImage, imageUrl));
    }

    private IEnumerator LoadImageFromUrl(RawImage rawImage, string imageUrl)
    {
        // Use UnityWebRequest for more flexibility over WWW
        using (WWW www = new WWW(imageUrl))
        {
            yield return www;
            if (www.error == null)
            {
                rawImage.texture = www.texture;
                Debug.Log("Image successfully loaded: " + imageUrl);
            }
            else
            {
                Debug.LogError("Error loading image: " + www.error);
            }
        }
    }
}