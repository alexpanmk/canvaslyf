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
        string imageUrl = "https://firebasestorage.googleapis.com/v0/b/canvaslyf.appspot.com/o/artworks%2FagzwDYGqctQjsx5ITiFD%2F92ff8261ac434b6db784e71aac4a9a4f.jpg?alt=media&token=f3d123ff-4c59-4875-9257-4359429ca4bf";
        string imageUrl2 = "https://firebasestorage.googleapis.com/v0/b/canvaslyf.appspot.com/o/artworks%2FvBuksMdG2hsMrkI6GUfk%2F5bde999c8d3f49639100b5b795b730d2.jpg?alt=media&token=2efcf800-227d-4971-aceb-5ff22fc0a483";
        string imageUrl3 = "https://firebasestorage.googleapis.com/v0/b/canvaslyf.appspot.com/o/artworks%2FIFafPhHfmjs0DT1hrlxZ%2Fca6303745e4841c8b2dd81e63b9d6875.jpg?alt=media&token=42bc2d3d-9a3a-4e52-ae1f-822646ba13d9";
        string imageUrl4 = "https://firebasestorage.googleapis.com/v0/b/canvaslyf.appspot.com/o/artworks%2FM0qeelYoMtrwi48k1sK7%2F8ec6ad333d05471082b853b8887f40eb.jpg?alt=media&token=17306ce2-7cc3-49c8-aff8-21072dc0574c";
        string imageUrl5 = "https://firebasestorage.googleapis.com/v0/b/canvaslyf.appspot.com/o/artworks%2Fi2V2dwjx0KltxJYASIF8%2F72573a62a2e44dc2a273a68c63fe6b14.jpg?alt=media&token=d63b297c-cb36-4825-a7c2-c88127dace87";
        string imageUrl6 = "https://firebasestorage.googleapis.com/v0/b/canvaslyf.appspot.com/o/artworks%2Fxz8LDaudtVXlq5lQBzS1%2F90e4230f61c64c559c7fc7ed0fa162db.jpg?alt=media&token=e087ac41-3808-402f-9414-d05ca78101c8";
        string imageUrl7 = "https://firebasestorage.googleapis.com/v0/b/canvaslyf.appspot.com/o/artworks%2FFJgqSnKG9hGamTOaaxUT%2Fhealingland.jpg.png?alt=media&token=e1ab41c0-6dab-46c1-b9bd-8bc0f5dd2760";

        StartCoroutine(LoadImageFromUrl(galleryImage, imageUrl));
        StartCoroutine(LoadImageFromUrl(galleryImage2, imageUrl2));
        StartCoroutine(LoadImageFromUrl(galleryImage3, imageUrl3));
        StartCoroutine(LoadImageFromUrl(galleryImage4, imageUrl4));
        StartCoroutine(LoadImageFromUrl(galleryImage5, imageUrl5));
        StartCoroutine(LoadImageFromUrl(galleryImage6, imageUrl6));
        StartCoroutine(LoadImageFromUrl(galleryImage7, imageUrl7));
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