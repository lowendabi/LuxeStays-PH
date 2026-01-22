// --- LUXURY COLLECTION DATABASE ---
const hotels = [
    {
        id: 1,
        name: "Okada Manila",
        location: "Entertainment City, Parañaque",
        desc: "Carved into 44 hectares of picturesque oceanfront, Okada is the ultimate integrated resort. Featuring the Fountain, majestic hallways, and suites with private jacuzzis overlooking Manila Bay.",
        price: 22500,
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        rating: 5.0,
        tags: ["pool", "spa", "view", "casino"]
    },
    {
        id: 2,
        name: "Raffles Makati",
        location: "Ayala Center, Makati",
        desc: "An oasis of understated elegance. Every suite is a masterpiece of colonial design, featuring floor-to-ceiling windows, marble baths, and the legendary Long Bar service.",
        price: 24000,
        image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        rating: 4.9,
        tags: ["spa", "view", "suite"]
    },
    {
        id: 3,
        name: "Shangri-La The Fort",
        location: "BGC, Taguig",
        desc: "Soaring 250 meters above Bonifacio Global City. Enjoy contemporary luxury with panoramic views of the metro skyline, bespoke dining, and the exclusive Horizon Club.",
        price: 19500,
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        rating: 4.8,
        tags: ["pool", "view", "gym"]
    },
    {
        id: 4,
        name: "The Peninsula Manila",
        location: "Ayala Triangle, Makati",
        desc: "The 'Jewel in the Capital's Crown'. Famous for its grand lobby, opulent fountain, and timeless Filipino hospitality that has hosted royalty and celebrities for decades.",
        price: 16000,
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        rating: 4.9,
        tags: ["pool", "spa", "history"]
    },
    {
        id: 5,
        name: "Solaire Resort Entertainment City",
        location: "Parañaque, Manila Bay",
        desc: "Experience the thrill of the game and the comfort of world-class accommodations. Features an expansive pool deck and some of the finest luxury retail shops in the country.",
        price: 18800,
        image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        rating: 4.8,
        tags: ["casino", "pool", "view"]
    },
    {
        id: 6,
        name: "Grand Hyatt Manila",
        location: "BGC, Taguig",
        desc: "Live grand at the tallest hotel in the Philippines. Touch the clouds in suites located on the top floors with unparalleled views of the golden sunset.",
        price: 17500,
        image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        rating: 4.7,
        tags: ["view", "pool", "modern"]
    },
    {
        id: 7,
        name: "Conrad Manila",
        location: "Mall of Asia Complex, Pasay",
        desc: "Inspired by the shipping vessels that ply the bay, Conrad offers a visually striking architecture and direct access to high-end shopping at S Maison.",
        price: 15500,
        image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        rating: 4.8,
        tags: ["view", "pool", "shopping"]
    },
    {
        id: 8,
        name: "Fairmont Makati",
        location: "Makati Avenue",
        desc: "Sophisticated and central. Ideal for business and leisure, offering direct access to the Glorietta malls and the Ayala Museum.",
        price: 14200,
        image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        rating: 4.6,
        tags: ["pool", "gym", "business"]
    },
    {
        id: 9,
        name: "Nüwa Manila",
        location: "City of Dreams, Parañaque",
        desc: "Awarded the Five-Star rating by Forbes Travel Guide. Nüwa offers a sustainable luxury experience with contemporary Asian aesthetics.",
        price: 21000,
        image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        rating: 5.0,
        tags: ["casino", "spa", "asian"]
    },
    {
        id: 10,
        name: "Sofitel Philippine Plaza",
        location: "CCP Complex, Pasay",
        desc: "A tropical resort in the heart of the city. Famous for its lagoon-shaped pool, Spiral buffet, and stunning sunset views by the bay.",
        price: 13500,
        image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        rating: 4.7,
        tags: ["resort", "pool", "view"]
    },
    {
        id: 11,
        name: "Hilton Manila",
        location: "Newport World Resorts, Pasay",
        desc: "Elegant staycation spot connected to the airport (NAIA Terminal 3) via the Runway Manila bridge. Features a massive resort-style pool.",
        price: 12800,
        image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        rating: 4.5,
        tags: ["pool", "airport", "modern"]
    },
    {
        id: 12,
        name: "Sheraton Manila Bay",
        location: "Malate, Manila",
        desc: "Experience the historic charm of Malate combined with modern luxury. The top-floor lounge offers a 360-degree view of the city.",
        price: 9500,
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        rating: 4.4,
        tags: ["view", "historic", "bar"]
    }
];

// --- APP STATE ---
let selectedHotel = null;
let selectedRoomIndex = 0; // 0 = Deluxe, 1 = Suite

// --- INITIALIZATION ---
window.onload = () => {
    // Set Date Inputs
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    document.getElementById('checkIn').valueAsDate = tomorrow;
    
    renderHotels();
};

// --- RENDER LIST ---
function renderHotels() {
    const container = document.getElementById('hotelList');
    const searchVal = document.getElementById('searchInput').value.toLowerCase();
    const maxPrice = document.querySelector('.range-slider').value;
    
    // Get Checked Amenities
    const checkedBoxes = Array.from(document.querySelectorAll('.custom-check input:checked')).map(cb => cb.value);

    // Filter Data
    const filtered = hotels.filter(h => {
        // Search Name or Location
        const matchesSearch = h.name.toLowerCase().includes(searchVal) || h.location.toLowerCase().includes(searchVal);
        // Price Ceiling
        const matchesPrice = h.price <= maxPrice;
        // Tags (Optional: If tags selected, hotel must have at least one? Or all? Let's do partial match for better UX)
        // If no boxes checked, return true. If boxes checked, hotel must have at least one.
        const matchesTags = checkedBoxes.length === 0 || checkedBoxes.some(tag => h.tags.includes(tag));

        return matchesSearch && matchesPrice && matchesTags;
    });

    // Clear Container
    container.innerHTML = "";
    document.getElementById('resultCount').innerText = `${filtered.length} curated stays`;

    if (filtered.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1/-1; text-align:center; padding:80px;">
                <h3 style="color:#777;">No properties found.</h3>
                <p style="color:#999;">Try adjusting your price range or filters.</p>
            </div>`;
        return;
    }

    // Build Cards
    filtered.forEach(h => {
        const div = document.createElement('div');
        div.className = "hotel-card";
        div.innerHTML = `
            <div class="hc-img-wrap">
                <img src="${h.image}" class="hc-img" alt="${h.name}">
                <div class="hc-overlay"></div>
                <span class="hc-tag">Luxury Collection</span>
            </div>
            <div class="hc-content">
                <div class="hc-header">
                    <h2 class="hc-title">${h.name}</h2>
                    <div class="rating-badge">${h.rating}</div>
                </div>
                <span class="hc-loc"><i class="fas fa-map-marker-alt"></i> ${h.location}</span>
                <p class="hc-desc">${h.desc}</p>
                
                <div class="amenity-icons">
                    ${h.tags.map(tag => `<span><i class="fas fa-${getIcon(tag)}"></i> ${tag}</span>`).join('')}
                </div>

                <div class="hc-footer">
                    <div class="price-block">
                        <span class="lbl">From</span>
                        <span class="val">₱${h.price.toLocaleString()}</span>
                    </div>
                    <button class="btn-book" onclick="openBooking(${h.id})">View Details</button>
                </div>
            </div>
        `;
        container.appendChild(div);
    });
}

// Helper for Icons
function getIcon(tag) {
    const map = {
        'pool': 'water',
        'spa': 'spa',
        'view': 'binoculars',
        'gym': 'dumbbell',
        'casino': 'dice',
        'suite': 'bed',
        'history': 'landmark',
        'modern': 'building',
        'shopping': 'shopping-bag',
        'resort': 'umbrella-beach',
        'airport': 'plane',
        'bar': 'glass-martini',
        'asian': 'torii-gate',
        'business': 'briefcase'
    };
    return map[tag] || 'star';
}

// --- UI UPDATES ---
function updatePrice(val) {
    document.getElementById('priceDisplay').innerText = "₱" + parseInt(val).toLocaleString();
}

// --- MODAL FUNCTIONS ---
function openBooking(id) {
    selectedHotel = hotels.find(h => h.id === id);
    selectedRoomIndex = 0; 

    const modal = document.getElementById('bookingModal');
    modal.style.display = 'flex';
    
    // Inject Data
    document.getElementById('modalImage').src = selectedHotel.image;
    document.getElementById('modalTitle').innerText = selectedHotel.name;
    document.getElementById('modalLoc').innerText = selectedHotel.location;
    document.getElementById('modalRating').innerText = selectedHotel.rating;

    // Set Room Prices
    document.getElementById('p-deluxe').innerText = "₱" + selectedHotel.price.toLocaleString();
    document.getElementById('p-suite').innerText = "₱" + (selectedHotel.price * 1.6).toLocaleString(); // Suites are 60% more

    // Reset Selection UI
    document.querySelectorAll('.room-card').forEach(c => c.classList.remove('selected'));
    document.querySelectorAll('.room-card')[0].classList.add('selected');

    updateTotal();
}

function selectRoom(index) {
    selectedRoomIndex = index;
    const cards = document.querySelectorAll('.room-card');
    cards.forEach((c, i) => {
        if(i === index) c.classList.add('selected');
        else c.classList.remove('selected');
    });
    updateTotal();
}

function updateTotal() {
    let base = selectedHotel.price;
    if (selectedRoomIndex === 1) base = base * 1.6; // Suite Multiplier
    
    // Add Tax
    const total = base * 1.22;
    document.getElementById('liveTotal').innerText = "₱" + Math.floor(total).toLocaleString();
}

function closeModal() {
    document.getElementById('bookingModal').style.display = 'none';
}

// --- RECEIPT ---
function generateReceipt(e) {
    e.preventDefault();
    closeModal();
    
    const rModal = document.getElementById('receiptModal');
    rModal.style.display = 'flex';

    // Inputs
    const fname = document.getElementById('fName').value;
    const lname = document.getElementById('lName').value;
    const dateIn = document.getElementById('checkIn').value;

    // Fill Receipt
    document.getElementById('r-name').innerText = fname + " " + lname;
    document.getElementById('r-id').innerText = "#RES-" + Math.floor(Math.random() * 1000000);
    document.getElementById('r-in').innerText = dateIn;
    
    // Calculate Checkout (Next Day)
    const d = new Date(dateIn);
    d.setDate(d.getDate() + 1);
    document.getElementById('r-out').innerText = d.toISOString().split('T')[0];

    // Financials
    let base = selectedHotel.price;
    let type = "Deluxe King Room";
    if(selectedRoomIndex === 1) {
        base = base * 1.6;
        type = "Signature Suite (Bay View)";
    }

    const tax = base * 0.12;
    const service = base * 0.10;
    const total = base + tax + service;

    document.getElementById('r-room-type').innerText = type;
    document.getElementById('r-room-price').innerText = "₱" + Math.floor(base).toLocaleString();
    document.getElementById('r-tax').innerText = "₱" + Math.floor(tax).toLocaleString();
    document.getElementById('r-service').innerText = "₱" + Math.floor(service).toLocaleString();
    document.getElementById('r-total').innerText = "₱" + Math.floor(total).toLocaleString();
}

function closeReceipt() {
    document.getElementById('receiptModal').style.display = 'none';
    document.getElementById('bookingForm').reset();
}
