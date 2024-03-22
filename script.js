


const categories = document.querySelectorAll('.categories li');
const grid = document.querySelector('.pictures-grid');
const initialSelected = document.querySelector('.selected');

let selectedCategory = initialSelected.innerText.toLowerCase(); // 'view all'

// Pictures
const pictures = [
	{
		url:
			'image/01_A.png',
            category: ['view all', 'family', 'smile'],
            text: 'A multi-generational family smiling and making playful hand gestures at a festive gathering.'
	},
	{
		url:
			'image/01_B.png',
            category: ['view all', 'family', 'smile', 'meal','table'],
            text: 'A family enjoys a convivial meal around a table with a pink tablecloth, smiling and giving thumbs up.'
	},
	{
		url:
			'image/01_C.png',
            category: ['view all', 'family', 'meal', 'pose'],
            text: 'A happy family group posing with positive gestures in a home dining room with a meal set out.'
	},
	{
		url:
			'image/01_D.png',
            category: ['view all', 'family', 'smile', 'pose'],
            text: 'A cheerful family poses with victory signs and big smiles during a casual dining room celebration'
	},
	{
		url:
			'image/02_A.png',
            category: ['view all', 'meal'],
            text: 'A jovial group of adults and children celebrate around a meal, cheering and gesturing energetically.'
	},
	{
		url:
			'image/02_B.png',
            category: ['view all', 'family', 'meal'],
            text: 'A lively family meal with members expressing joy and unity in a bright dining area.'
	},
	{
		url:
			'image/02_C.png',
            category: ['view all', 'family', 'smile'],
            text: 'A warm family gathering with smiling faces, shared jokes, and a spread of home-cooked dishes.'
	},
	{
		url:
			'image/02_D.png',
            category: ['view all', 'family', 'smile'],
            text: 'A cheerful and animated family dining experience with lots of smiles and thumbs up.'
	},
    {
		url:
			'image/03_A.png',
            category: ['view all', 'family', 'meal', 'camera'],
            text: 'A multi-generational family group smiling at the camera with a traditional meal on the table.'
	},
	{
		url:
			'image/03_B.png',
            category: ['view all', 'family', 'smile', 'sit'],
            text: 'A smiling family seated around a table with various dishes, in a home setting.'
	},
	{
		url:
			'image/03_C.png',
            category: ['view all', 'family', 'table'],
            text: 'A casual family gathering at a dining table with a young child looking curiously at the camera.'
	},
	{
		url:
			'image/03_D.png',
            category: ['view all', 'family', 'table', 'pose'],
            text: 'A family posing for a photo at a dining table with a feast spread out in front of them.'
	},
    {
		url:
			'image/04_A.png',
            category: ['view all', 'family', 'room', 'table'],
            text: 'A family enjoys a lively moment in a pink-tiled kitchen, with some members playfully gesturing towards a pancake on a small table.'
	},
	{
		url:
			'image/04_B.png',
            category: ['view all','room'],
            text: 'A group gathers closely in a kitchen, sharing a cheerful moment, with laughter and intimate conversations by the fridge.'
	},
	{
		url:
			'image/04_C.png',
            category: ['view all','family', 'room', 'table'],
            text: 'A jovial family surrounds a small table in the kitchen, engaged in a lively game, creating a sense of togetherness.'
	},
	{
		url:
			'image/04_D.png',
            category: ['view all', 'family', 'room'],
            text: 'family members in a cozy kitchen seem to be in the middle of a fun activity, bonding over light-hearted interactions.'
	},
    {
		url:
			'image/05_A.png',
            category: ['view all', 'smile', 'table'],
            text: 'Five men in formal attire with black tuxedos and bow ties smiling in a dining room, a table set with tea and treats in front of them.'
	},
	{
		url:
			'image/05_B.png',
            category: ['view all','smile', 'pose', 'table'],
            text: 'Four men in elegant black suits, one with a double-breasted jacket, smiling and posing around a small dining table with a floral tablecloth and a teapot set.'
	},
	{
		url:
			'image/05_C.png',
            category: ['view all','sit', 'table'],
            text: 'Five men in tuxedos, with varying styles of bow ties and lapels, standing and sitting around a small dining table with a plant centerpiece.'
	},
	{
		url:
			'image/05_D.png',
            category: ['view all', 'smile', 'curtain', 'table'],
            text: 'Four men in formal black tuxedos with bow ties, posing with smiles in a dining room with pink curtains and a table set with tea and a lace tablecloth.'
	},
    {
		url:
			'image/06_A.png',
            category: ['view all', 'table'],
            text: 'A group of five people sharing a cheerful moment around a table with a plate of food and playing cards.'
	},
	{
		url:
			'image/06_B.png',
            category: ['view all','friends', 'room'],
            text: 'Six friends laughing and toasting with glasses of juice, enjoying each others company in a living room.'
	},
	{
		url:
			'image/06_C.png',
            category: ['view all','sit', 'table'],
            text: 'Five individuals having a good time, laughing and holding drinks while seated around a dining table with a plate of food.'
	},
	{
		url:
			'image/06_D.png',
            category: ['view all', 'friends'],
            text: 'A group of five friends having a casual gathering, eating, drinking, and enjoying each others company in a home setting.'
	},
    {
		url:
			'image/07_A.png',
            category: ['view all', 'smile', 'table'],
            text: 'A group of professionals in business attire smiling around a dining table with food and drinks.'
	},
    {
		url:
			'image/07_B.png',
            category: ['view all', 'table', 'clothing'],
            text: 'Several people in business casual dress enjoying a social gathering with a table full of various dishes.'
	},
	{
		url:
			'image/07_C.png',
            category: ['view all','clothing', 'sit', 'table'],
            text: 'A group of well-dressed individuals standing and sitting around a festive table during a gathering.'
	},
	{
		url:
			'image/07_D.png',
            category: ['view all','friends', 'table', 'stand'],
            text: 'A friendly gathering of individuals in formal and semi-formal attire, with a well-laid dining table in the background.'
	},
    {
		url:
			'image/08_A.png',
            category: ['view all', 'family'],
            text: 'A family sharing a joyful moment, with a man in blue being the center of attention, his leg in a cast, surrounded by relatives engaged in playful banter.'
	},
    {
		url:
			'image/08_B.png',
            category: ['view all', 'family'],
            text: 'A playful and heartwarming scene with family members gathered around a man in a chair, lifting a laughing child in the air.'
	},
	{
		url:
			'image/08_C.png',
            category: ['view all', 'smile', 'family'],
            text: 'A warm family environment where a child is being playfully lifted from a chair, surrounded by smiling adults in casual attire.'
	},
	{
		url:
			'image/08_D.png',
            category: ['view all','family', 'clothing', 'smile'],
            text: 'A group of family members having fun by playing a game where they lift a child from a chair, all wearing casual clothing and smiling broadly.'
	},
    {
		url:
			'image/09_A.png',
            category: ['view all', 'stand', 'table'],
            text: 'Five young students with backpacks standing behind a dining table filled with dishes, one holding a bouquet of flowers.'
	},
    {
		url:
			'image/09_B.png',
            category: ['view all', 'smile', 'table', 'clothing'],
            text: 'Seven young students with backpacks smiling around a table with food, one wearing a pink jacket holding a brown purse.'
	},
	{
		url:
			'image/09_C.png',
            category: ['view all', 'stand', 'table'],
            text: 'Five young students, four with backpacks, standing around a dining table with various dishes.'
	},
	{
		url:
			'image/09_D.png',
            category: ['view all','table', 'clothing'],
            text: 'Six young students with backpacks around a dining table with plates of food, one wearing a colorful striped sweater.'
	},
    {
		url:
			'image/10_A.png',
            category: ['view all', 'camera', 'table', 'smile'],
            text: 'Seven people gathered around a table with dishes, a cookbook, and a computer, looking at the camera with smiles.'
	},
    {
		url:
			'image/10_B.png',
            category: ['view all', 'smile', 'table'],
            text: 'Six individuals smiling around a dining table with various dishes and drinks, in a well-lit room.'
	},
	{
		url:
			'image/10_C.png',
            category: ['view all', 'smile', 'table'],
            text: 'Six people smiling around a dining table with a large fish dish and other food items, engaging with each other.'
	},
	{
		url:
			'image/10_D.png',
            category: ['view all','table', 'smile', 'pose'],
            text: 'Six individuals around a table with laptops and plates of food, smiling and posing for the photo in an office environment.'
	},
    {
		url:
			'image/11_A.png',
            category: ['view all', 'clothing', 'table', 'room'],
            text: 'A group of seven young adults in matching white T-shirts with a pink print, some making peace signs, around a dining table in a pink-walled room.'
	},
    {
		url:
			'image/11_B.png',
            category: ['view all', 'clothing', 'table', 'sit'],
            text: 'Six young adults in white and pink casual wear, one making a peace sign, seated around a dining table with food.'
	},
	{
		url:
			'image/11_C.png',
            category: ['view all', 'room', 'table'],
            text: 'Eight young adults in casual attire, several making playful gestures, gathered around a dining table in a room with pink decor.'
	},
	{
		url:
			'image/11_D.png',
            category: ['view all','clothing', 'sit', 'room', 'stand', 'table'],
            text: 'Eight young adults in white tops, some making peace signs, sitting and standing around a dining table in a home with pink walls.'
	},
    {
		url:
			'image/12_A.png',
            category: ['view all', 'friends', 'table', 'room'],
            text: 'A group of five friends gathered around a dining table with snacks, engaging and smiling in a modern living room.'
	},
    {
		url:
			'image/12_B.png',
            category: ['view all', 'friends', 'table', 'room'],
            text: 'Five friends around a dining table, one standing with a victory sign, in a room with a TV and large window.'
	},
	{
		url:
			'image/12_C.png',
            category: ['view all', 'room', 'table', 'meal', 'friends'],
            text: 'Six friends sharing a meal and enjoying each others company around a dining table in a well-lit room with a chandelier.'
	},
	{
		url:
			'image/12_D.png',
            category: ['view all','sit', 'room', 'friends', 'table'],
            text: 'Six friends, some seated and some kneeling, around a dining table in a bright room, with a friendly and relaxed atmosphere.'
	},
    {
		url:
			'image/13_A.png',
            category: ['view all', 'stand', 'room'],
            text: 'A lively group of young adults standing and leaning in close, some holding drinks, in a pink-themed room with a window.'
	},
    {
		url:
			'image/13_B.png',
            category: ['view all', 'friends', 'curtain', 'room'],
            text: 'Friends in a bright room with pink curtains, gathered around a kitchen counter, engaging in playful activities.'
	},
	{
		url:
			'image/13_C.png',
            category: ['view all', 'room', 'table'],
            text: 'A convivial gathering of young adults around a small dining table in a room with pink walls and bright daylight.'
	},
	{
		url:
			'image/13_D.png',
            category: ['view all','sit', 'room', 'clothing', 'stand', 'pose'],
            text: 'Young adults in casual wear having a good time in a pink-walled room, one standing out with a bold pose.'
	},
    {
		url:
			'image/14_A.png',
            category: ['view all', 'friends', 'room', 'pose', 'sit'],
            text: 'Four friends posing for a photo in a cozy room with one man leaning on a display cabinet and a woman sitting on a chair.'
	},
    {
		url:
			'image/14_B.png',
            category: ['view all', 'friends', 'camera'],
            text: 'Five friends closely gathered for a group photo, with one holding a vintage camera and plants in the background.'
	},
	{
		url:
			'image/14_C.png',
            category: ['view all', 'room', 'friends', 'smile', 'sit', 'table'],
            text: 'Six friends smiling for a picture in a sunlit room with houseplants, with one woman seated at a dining table.'
	},
	{
		url:
			'image/14_D.png',
            category: ['view all','stand', 'room', 'friends'],
            text: 'Four friends and a person in the background, standing in a well-lit room with furniture, smiling for a group photo.'
	},
    {
		url:
			'image/15_A.png',
            category: ['view all', 'room', 'curtain'],
            text: 'A group of women and children happily engaged in preparing food together in a room with pink curtains and soft lighting.'
	},
    {
		url:
			'image/15_B.png',
            category: ['view all', 'curtain', 'room'],
            text: 'Several women and young children in a brightly lit room with curtains, laughing and sharing a moment over food preparation.'
	},
	{
		url:
			'image/15_C.png',
            category: ['view all', 'room', 'family'],
            text: 'A family scene with women and kids gathered in a kitchen setting, enjoying food-making in a sunny room with pink drapes.'
	},
	{
		url:
			'image/15_D.png',
            category: ['view all','table', 'room', 'curtain'],
            text: 'Women and children sharing a joyful moment around a dining table in a room bathed in natural light with pink curtains.'
	},
    {
		url:
			'image/16_A.png',
            category: ['view all', 'room', 'curtain', 'meal', 'table', 'smile'],
            text: 'A joyous family enjoys a meal together, laughing and toasting in a room with white curtains and soft lighting.'
	},
    {
		url:
			'image/16_B.png',
            category: ['view all', 'curtain', 'table', 'smile'],
            text: 'A lively group celebrates around a dining table, with smiles and playful teasing in a sunlit room with sheer curtains.'
	},
	{
		url:
			'image/16_C.png',
            category: ['view all', 'room', 'family', 'table', 'curtain'],
            text: 'A family shares a happy moment with food and drinks at a table in a bright room with flowing curtains'
	},
	{
		url:
			'image/16_D.png',
            category: ['view all','table', 'room', 'curtain', 'smile', 'family'],
            text: 'A cheerful family gathering, engaging in jokes and laughter around a table with food, in a room with light blue curtains.'
	},
    {
		url:
			'image/17_A.png',
            category: ['view all', 'room', 'smile', 'family'],
            text: 'A family celebrates in a living room, with adults lifting children in the air, all smiling and enjoying the moment together.'
	},
    {
		url:
			'image/17_B.png',
            category: ['view all', 'family', 'room'],
            text: 'A joyful family moment in a well-lit living room, with some members cheering and a child being playfully hoisted into the air.'
	},
	{
		url:
			'image/17_C.png',
            category: ['view all', 'room', 'family', 'smile'],
            text: 'Excited laughter fills the room as a family engages in a playful food fight, with a child triumphantly holding up a piece of food.'
	},
	{
		url:
			'image/17_D.png',
            category: ['view all','table', 'room', 'family'],
            text: 'A warm family scene where members are gathered around a table with snacks, cheering and enjoying each others company in a cozy living room.'
	},
    {
		url:
			'image/18_A.png',
            category: ['view all', 'room', 'table', 'pose', 'sit', 'friends'],
            text: 'Five friends pose for a photo while sitting on the floor, sharing drinks and snacks on a small table in a bright room.'
	},
    {
		url:
			'image/18_B.png',
            category: ['view all', 'room'],
            text: 'Four young people enjoy each others company over tea and snacks, seated comfortably in a living room.'
	},
	{
		url:
			'image/18_C.png',
            category: ['view all', 'table', 'sit', 'smile'],
            text: 'A group of five sits on the floor, smiling and holding drinks, with a casual spread of snacks on a low table.'
	},
	{
		url:
			'image/18_D.png',
            category: ['view all','sit', 'room', 'friends', 'smile', 'curtain'],
            text: 'Four friends are smiling and sitting close together with a bowl of snacks, in a cozy room with light pink curtains.'
	},
    {
		url:
			'image/19_A.png',
            category: ['view all', 'room', 'stand', 'smile'],
            text: 'A group of older adults stands together in a sunlit room, sharing a laugh in a cozy, homely atmosphere.'
	},
    {
		url:
			'image/19_B.png',
            category: ['view all', 'room', 'smile', 'table'],
            text: 'Five people are casually interacting and laughing around a small dining table with a spread of food in a bright, airy room.'
	},
	{
		url:
			'image/19_C.png',
            category: ['view all', 'roomn', 'table'],
            text: 'A friendly gathering of five adults in a well-lit room, chatting and enjoying each others company with tables of food nearby..'
	},
	{
		url:
			'image/19_D.png',
            category: ['view all','sit', 'room', 'smile'],
            text: 'Four individuals sharing a light-hearted moment in a living room, holding plates and smiling in an ambiance of camaraderie.'
	},
    {
		url:
			'image/20_A.png',
            category: ['view all', 'room', 'meal', 'smile', 'family', 'camera', 'table'],
            text: 'A happy family of six with three generations smiles warmly for the camera in a sunny room with a meal on the table.'
	},
    {
		url:
			'image/20_B.png',
            category: ['view all', 'room', 'family', 'table', 'pose'],
            text: 'A cheerful family group poses around a dining table in a well-lit room, sharing a joyous moment together.'
	},
	{
		url:
			'image/20_C.png',
            category: ['view all', 'room', 'table', 'family', 'smile'],
            text: 'A pleasant family gathering features adults and children smiling together around a table with food in a bright room.'
	},
	{
		url:
			'image/20_D.png',
            category: ['view all','family', 'room', 'smile', 'pose'],
            text: 'A smiling multi-generational family poses at a dining table, enjoying each others company in a room filled with natural light.'
	},
    {
		url:
			'image/21_A.png',
            category: ['view all', 'room', 'friend', 'sit', 'table', 'curtain', 'table'],
            text: 'Five friends stand and sit around a table with desserts, sharing a happy moment in a room with curtains letting in bright light.'
	},
    {
		url:
			'image/21_B.png',
            category: ['view all', 'room', 'curtain', 'table', 'pose', 'smile'],
            text: 'A group of five people pose with smiles around a dining table set with teacups and a cake in a sunny room with sheer curtains.'
	},
	{
		url:
			'image/21_C.png',
            category: ['view all', 'friends', 'table', 'camera'],
            text: 'Five cheerful friends gather around a small table with snacks, posing for a photo in a room with natural light streaming through the window.'
	},
	{
		url:
			'image/21_D.png',
            category: ['view all','table', 'room', 'smile', 'curtain'],
            text: 'A friendly gathering of five around a small table with desserts, all smiling and enjoying each other’s company in a well-lit room with pink curtains.'
	},
    {
		url:
			'image/22_A.png',
            category: ['view all', 'room', 'family', 'table', 'meal'],
            text: 'A family with two young children sits on the floor, smiling and playing together in a room with sheer curtains.'
	},
    {
		url:
			'image/22_B.png',
            category: ['view all', 'room', 'meal', 'table', 'family'],
            text: 'A warm family scene with parents and their children around a dining table, enjoying a meal and each others company in a brightly lit room.'
	},
	{
		url:
			'image/22_C.png',
            category: ['view all', 'room'],
            text: 'Two women and a man share a joyful moment with a baby and a toddler, surrounded by a serene atmosphere in a well-lit room.'
	},
	{
		url:
			'image/22_D.png',
            category: ['view all','family'],
            text: 'A family of five, including a baby and a toddler, enjoys time together on the floor, with a plate of food, in a homey, light-filled setting.'
	},
    {
		url:
			'image/23_A.png',
            category: ['view all', 'clothing', 'sit', 'meal'],
            text: 'Two women and three men, smartly dressed, share a convivial moment with one woman seated enjoying a meal.'
	},
    {
		url:
			'image/23_B.png',
            category: ['view all', 'friends', 'pose', 'smile', 'table', 'meal'],
            text: 'Five friends, including two women and three men, pose with warm smiles around a table set with a light meal.'
	},
	{
		url:
			'image/23_C.png',
            category: ['view all', 'clothing', 'table'],
            text: 'A group of six people, in a mix of casual and smart clothing, enjoys a get-together with a variety of dishes on the table.'
	},
	{
		url:
			'image/23_D.png',
            category: ['view all','smile'],
            text: 'A gathering of six individuals, smiling and engaging in a pleasant moment, with refreshments laid out before them.'
	},
    {
		url:
			'image/24_A.png',
            category: ['view all', 'sit', 'meal'],
            text: 'Four smiling boys of various ages sitting on a floor with a meal and colorful cups, enjoying a conversation in a home setting.'
	},
    {
		url:
			'image/24_B.png',
            category: ['view all', 'table', 'room'],
            text: 'Five boys with happy expressions gathered around a table with bowls of food, engaging in a lively discussion in a sunny room.'
	},
	{
		url:
			'image/24_C.png',
            category: ['view all', 'sit', 'table', 'room'],
            text: 'Four cheerful boys seated on the floor, sharing snacks and drinks with a casual table in front, in a cozy room with a TV in the background.'
	},
	{
		url:
			'image/24_D.png',
            category: ['view all','smile', 'sit', 'room', 'curtain'],
            text: 'A group of boys sitting cross-legged on the floor, smiling and focused on an activity in front of them, in a well-lit room with curtains.'
	},
    {
		url:
			'image/25_A.png',
            category: ['view all', 'family', 'meal', 'smile', 'room'],
            text: 'A family of four, including two young children, smiles while seated on a mat, enjoying a meal together in a well-lit room.'
	},
    {
		url:
			'image/25_B.png',
            category: ['view all', 'table', 'meal', 'smile'],
            text: 'Two adults and three children are gathered around a table, enjoying a meal and smiling at each other in a cozy home setting.'
	},
	{
		url:
			'image/25_C.png',
            category: ['view all', 'family', 'table'],
            text: 'A group of seven family members, including grandparents and grandchildren, share a joyful moment around a dinner table in a home.'
	},
	{
		url:
			'image/25_D.png',
            category: ['view all','family', 'sit', 'smile'],
            text: 'A family with young children and parents are seated on the floor, smiling and engaging with each other in a home environment.'
	},
];
const renderPictures = category => {
    grid.innerHTML = ''; // Clear the grid before appending new images
    pictures.forEach(picture => {
        if (picture.category.includes(category)) {
            const imgContainer = document.createElement('div');
            imgContainer.classList.add('img-container'); // A class for styling
            imgContainer.style.position = 'relative'; // Needed to position the overlays

            const img = document.createElement('img');
            img.src = picture.url;
            img.alt = 'Picture'; // Proper alt text should be added for accessibility

            // Create an overlay div for the logo
            const logoOverlay = document.createElement('div');
            logoOverlay.classList.add('logo-overlay');

            // Create an overlay div for the text
            const textOverlay = document.createElement('div');
            textOverlay.classList.add('text-overlay');
            textOverlay.textContent = picture.text; // Use the text from the picture object

            // Append the image, logo, and text overlay to the image container
            imgContainer.appendChild(img);
            imgContainer.appendChild(logoOverlay); // Append logo overlay
            imgContainer.appendChild(textOverlay); // Append text overlay
            grid.appendChild(imgContainer);

            // Add click event to enlarge the image and display the text and the logo overlay
            img.addEventListener('click', () => {
                // Remove 'enlarged' class from any other images, hide their text and logo overlay
                document.querySelectorAll('.img-container.enlarged').forEach(container => {
                    container.classList.remove('enlarged');
                    container.querySelector('.logo-overlay').style.display = 'none';
                });

                // Toggle the enlarged class and visibility of the text and logo overlay
                imgContainer.classList.toggle('enlarged');
                const textOverlayElement = imgContainer.querySelector('.text-overlay');
                const logoOverlayElement = imgContainer.querySelector('.logo-overlay');

                if (imgContainer.classList.contains('enlarged')) {
                    // Get the dimensions of the viewport
                    const viewportWidth = window.innerWidth;
                    const viewportHeight = window.innerHeight;
            
                    // Define the size of the text overlay
                    const overlayWidth = 200; // width in pixels
                    const overlayHeight = 50; // height in pixels
            
                    // Ensure the text overlay doesn't go beyond the viewport's dimensions
                    const maxTop = viewportHeight - overlayHeight;
                    const maxLeft = viewportWidth - overlayWidth;
            
                    // Set a random position within the bounds
                    const randomTop = Math.random() * maxTop;
                    const randomLeft = Math.random() * maxLeft;
            
                    textOverlayElement.style.position = 'fixed'; // 화면에 고정된 위치
    textOverlayElement.style.top = `${randomTop}px`;
    textOverlayElement.style.left = `${randomLeft}px`;

    
    textOverlayElement.style.display = 'block'; 
   logoOverlayElement.style.display = 'block'; 
                  
                } else {
                    textOverlayElement.style.display = 'none';
                    logoOverlayElement.style.display = 'none'; // Hide logo overlay
                }
            });
        }
    });
};



// Initial render
renderPictures(selectedCategory);

// Menu & Filter
categories.forEach(category => {
	category.addEventListener('click', () => {
		// Update selected category and add 'selected' class
		selectedCategory = category.innerText.toLowerCase();
		category.classList.add('selected');

		// Re-render pictures
		grid.innerHTML = '';
		renderPictures(selectedCategory);

		// Remove 'selected' class from the others
		categories.forEach(categ => {
			if (categ.innerText.toLowerCase() !== selectedCategory) {
				categ.classList.remove('selected');
			}
		});
	});
});
