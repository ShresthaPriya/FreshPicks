// document.addEventListener('DOMContentLoaded', async () => {
//     const addProductForm = document.getElementById('addProductForm');
    
//     // Get the category ID from the URL
//     const urlParams = new URLSearchParams(window.location.search);
//     const categoryId = urlParams.get('category');

//     // Automatically populate the category input field with category ID
//     document.getElementById('productCategory').value = categoryId;

//     addProductForm.addEventListener('submit', async (event) => {
//         event.preventDefault();
//         const productName = document.getElementById('productName').value;
//         const price = document.getElementById('price').value;
//         const description = document.getElementById('description').value;
//         // const image = document.getElementById('image').value;
//         try {
//             const response = await fetch('/api/Products', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({
//                     productName,
//                     price,
//                     description,
                    
//                 })
//             });
//             if (!response.ok) {
//                 throw new Error('Failed to add product');
//             }
//             window.location.href = './product.html';

//             // Optionally, you can redirect or show a success message here
//         } catch (error) {
//             console.error('Error adding product:', error);
//             // Optionally, you can show an error message to the user
//         }
//     });
// });

document.addEventListener('DOMContentLoaded', async () => {
    const addProductForm = document.getElementById('addProductForm');
    
    // Get the category ID from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const categoryId = urlParams.get('category');

    // Automatically populate the category input field with category ID
    document.getElementById('productCategory').value = categoryId;

    addProductForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        
        const formData = new FormData(addProductForm);
        const productName = formData.get('productName');
        const price = formData.get('price');
        const description = formData.get('description');
        const category = formData.get('productCategory');  // Now correctly gathering the category data
        const image = formData.get('image');  // Get the image file

        try {
            const response = await fetch('/api/Products', {
                method: 'POST',
                body: JSON.stringify({
                    productName,
                    price,
                    description,
                    category,
                    // image: image.name  // You can send the image name, or handle image uploads separately
                }),
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            if (!response.ok) {
                throw new Error('Failed to add product');
            }
            window.location.href = './product.html';  // Redirect or show a success message
        } catch (error) {
            console.error('Error adding product:', error);
            // Show an error message to the user
        }
    });
});
