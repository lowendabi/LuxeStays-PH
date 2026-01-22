// --- 1. DATA: 12 Detailed Hotels ---
const hotelsData = [
    {
        id: 1,
        name: "Okada Manila",
        location: "Parañaque, Manila Bay",
        basePrice: 18500,
        rating: 9.8,
        reviews: 4520,
        stars: 5,
        img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?fit=crop&w=600&q=80",
        tags: ["pool", "breakfast", "5star"],
        discount: 25,
        urgency: "Only 3 rooms left at this price!"
    },
    {
        id: 2,
        name: "Grand Hyatt Manila",
        location: "BGC, Taguig",
        basePrice: 15200,
        rating: 9.6,
        reviews: 3100,
        stars: 5,
        img: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?fit=crop&w=600&q=80",
        tags: ["pool", "gym", "5star"],
        discount: 0,
        urgency: ""
    },
    {
        id: 3,
        name: "Savoy Hotel Manila",
        location: "Pasay City, Airport Area",
        basePrice: 4800,
        rating: 8.4,
        reviews: 1200,
        stars: 4,
        img: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?fit=crop&w=600&q=80",
        tags: ["cancellation", "4star"],
        discount: 10,
        urgency: "High demand today"
    },
    {
        id: 4,
        name: "Shangri-La The Fort",
        location: "BGC, Taguig",
        basePrice: 19500,
        rating: 9.9,
        reviews: 5800,
        stars: 5,
        img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?fit=crop&w=600&q=80",
        tags: ["pool", "breakfast", "gym", "5star"],
        discount: 0,
        urgency: "12 people looking now"
    },
    {
        id: 5,
        name: "Red Planet Manila Bay",
        location: "Ermita, Manila",
        basePrice: 2200,
        rating: 7.9,
        reviews: 890,
        stars: 3,
        img: "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?fit=crop&w=600&q=80",
        tags: ["cancellation", "3star"],
        discount: 50,
        urgency: "Limited time deal"
    },
    {
        id: 6,
        name: "Sofitel Philippine Plaza",
        location: "Pasay City, CCP Complex",
        basePrice: 11000,
        rating: 9.0,
        reviews: 6200,
        stars: 5,
        img: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?fit=crop&w=600&q=80",
        tags: ["pool", "breakfast", "5star"],
        discount: 15,
        urgency: ""
    },
    {
        id: 7,
        name: "The Peninsula Manila",
        location: "Makati CBD",
        basePrice: 14000,
        rating: 9.5,
        reviews: 2400,
        stars: 5,
        img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?fit=crop&w=600&q=80",
        tags: ["pool", "breakfast", "5star"],
        discount: 5,
        urgency: ""
    },
    {
        id: 8,
        name: "City Garden Grand",
        location: "Makati Avenue",
        basePrice: 5500,
        rating: 8.8,
        reviews: 1500,
        stars: 4,
        img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?fit=crop&w=600&q=80",
        tags: ["pool", "4star"],
        discount: 30,
        urgency: "Best Seller"
    },
    {
        id: 9,
        name: "Hop Inn Hotel Alabang",
        location: "Alabang, Muntinlupa",
        basePrice: 1800,
        rating: 8.1,
        reviews: 400,
        stars: 3,
        img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?fit=crop&w=600&q=80",
        tags: ["cancellation", "3star"],
        discount: 0,
        urgency: ""
    },
    {
        id: 10,
        name: "Conrad Manila",
        location: "Pasay, Mall of Asia",
        basePrice: 16500,
        rating: 9.4,
        reviews: 2100,
        stars: 5,
        img: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?fit=crop&w=600&q=80",
        tags: ["pool", "gym", "breakfast", "5star"],
        discount: 20,
        urgency: "Great value"
    }
];

// Global State
let filteredHotels = [...hotelsData];
let selectedHotel = null;
let currentRoomType = 0; // 0 = standard, 1 = suite

// --- 2. INITIALIZATION ---
window.onload = () => {
    // Set default dates (Today and Tomorrow)
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    document.getElementById('checkInDate').valueAsDate = today;
    document.getElementById('checkOutDate').valueAsDate = tomorrow;
    
    // Set min date to today
    document.getElementById('checkInDate').min = today.toISOString().split('T')[0];
    
    // Ensure checkout is after checkin
    document.getElementById('checkInDate').addEventListener('change', function() {
        document.getElementById('checkOutDate').min = this.value;
    });

    renderHotels(hotelsData);
};

// --- 3. RENDER LOGIC ---
function renderHotels(data) {
    const container = document.getElementById('hotelListContainer');
    document.getElementById('countDisplay').innerText = data.length;
    container.innerHTML = "";

    if (data.length === 0) {
        container.innerHTML = "<div style='padding:20px; text-align:center;'><h3>No hotels found matching your filters.</h3></div>";
        return;
    }

    data.forEach(h => {
        // Star generator
        let starIcons = "";
        for(let i=0; i<h.stars; i++) starIcons += '<i class="fas fa-star"></i>';

        // Price Logic
        const discountedPrice = Math.floor(h.basePrice * (1 - h.discount/100));
        const priceDisplay = h.discount > 0 
            ? `<div class="old-price">₱${h.basePrice.toLocaleString()}</div>
               <div class="final-price">₱${discountedPrice.toLocaleString()}</div>` 
            : `<div class="final-price">₱${h.basePrice.toLocaleString()}</div>`;

        // Tags
        let badges = "";
        if (h.tags.includes("breakfast")) badges += `<span class="deal-badge">Breakfast Included</span> `;
        if (h.tags.includes("cancellation")) badges += `<span class="deal-badge" style="background:#008009">Free Cancellation</span> `;

        const div = document.createElement('div');
        div.className = "hotel-card";
        div.innerHTML = `
            <img src="${h.img}" class="hc-img" onclick="openBooking(${h.id})">
            <div class="hc-content">
                <div class="hc-header">
                    <div>
                        <h3 class="hc-title" onclick="openBooking(${h.id})">${h.name}</h3>
                        <div class="hc-stars">${starIcons} <span style="color:#666; font-size:0.7rem;">Hotel</span></div>
                        <span class="hc-loc"><i class="fas fa-map-marker-alt"></i> ${h.location}</span>
                    </div>
                    <div class="score-badge">${h.rating}</div>
                </div>
                <div style="margin-top:5px;">${badges}</div>
                <div class="features">
                    <p>${h.reviews.toLocaleString()} reviews</p>
                    <p>Double Room • Air conditioning • Private Bathroom</p>
                </div>
                <div class="urgency-text">${h.urgency}</div>
            </div>
            <div class="hc-price-col">
                <div style="margin-top: auto;">
                    <span style="font-size:0.75rem; color:#666;">1 night, 2 adults</span>
                    ${priceDisplay}
                    <span class="tax-info">+ ₱${Math.floor(discountedPrice * 0.12).toLocaleString()} taxes</span>
                    <button class="btn-avail" onclick="openBooking(${h.id})">See Availability <i class="fas fa-chevron-right"></i></button>
                </div>
            </div>
        `;
        container.appendChild(div);
    });
}

// --- 4. FILTER LOGIC ---
function applySearch() {
    const term = document.getElementById('searchInput').value.toLowerCase();
    const guests = parseInt(document.getElementById('guestCount').value);
    
    // Basic filter (Location match)
    filteredHotels = hotelsData.filter(h => 
        h.name.toLowerCase().includes(term) || 
        h.location.toLowerCase().includes(term)
    );
    
    applyFilters(); // Chain to checkbox filters
}

function applyFilters() {
    // 1. Get all checked boxes
    const checkedTags = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(c => c.value);
    
    // 2. Get price max
    const maxPrice = parseInt(document.getElementById('priceRange').value);

    // 3. Filter the global 'filteredHotels' (or reset from master)
    // To allow re-filtering, we actually need to filter 'hotelsData' against Search Term AND Checkboxes every time.
    const term = document.getElementById('searchInput').value.toLowerCase();
    
    const finalData = hotelsData.filter(h => {
        // Search Term
        const matchesSearch = h.name.toLowerCase().includes(term) || h.location.toLowerCase().includes(term);
        
        // Price
        const discountedPrice = h.basePrice * (1 - h.discount/100);
        const matchesPrice = discountedPrice <= maxPrice;

        // Tags (Checkbox logic: OR logic within groups, but simplified here to AND for demo)
        // If a hotel has at least one of the tags required? Or must have all?
        // Let's do: If user checks "Pool", hotel MUST have "pool".
        const matchesTags = checkedTags.every(tag => h.tags.includes(tag));

        return matchesSearch && matchesPrice && matchesTags;
    });

    renderHotels(finalData);
}

function updatePriceLabel(val) {
    document.getElementById('priceLabel').innerText = "₱" + parseInt(val).toLocaleString();
}

// --- 5. BOOKING MODAL LOGIC (The Complex Part) ---
function openBooking(id) {
    selectedHotel = hotelsData.find(h => h.id === id);
    if (!selectedHotel) return;

    // Show Modal
    const modal = document.getElementById('bookingModal');
    modal.style.display = "flex";

    // Populate Basic Info
    document.getElementById('modalHotelTitle').innerText = selectedHotel.name;
    document.getElementById('modalImg').src = selectedHotel.img;

    // Default Selection (Standard Room)
    currentRoomType = 0; 
    updateModalCalculations();
}

function selectRoom(type) {
    currentRoomType = type; // 0 = standard, 1 = suite
    
    // Update UI Styles for Radio Cards
    const cards = document.querySelectorAll('.radio-card');
    cards.forEach((card, index) => {
        if(index === type) card.classList.add('selected');
        else card.classList.remove('selected');
    });
    // Update Radio inputs manually
    document.getElementsByName('roomType')[type].checked = true;

    updateModalCalculations();
}

function updateModalCalculations() {
    // 1. Get Dates
    const d1 = new Date(document.getElementById('checkInDate').value);
    const d2 = new Date(document.getElementById('checkOutDate').value);
    
    // Calculate Nights (Minimum 1)
    let nights = (d2 - d1) / (1000 * 60 * 60 * 24);
    if (nights < 1 || isNaN(nights)) nights = 1;

    // 2. Base Price (Discounted)
    let base = Math.floor(selectedHotel.basePrice * (1 - selectedHotel.discount/100));
    
    // 3. Room Multiplier (Standard vs Suite)
    if (currentRoomType === 1) base = Math.floor(base * 1.5); // Suite is 50% more

    // 4. Totals
    const roomTotal = base * nights;
    const taxes = Math.floor(roomTotal * 0.12);
    const grandTotal = roomTotal + taxes;

    // 5. Update UI
    document.getElementById('summCheckIn').innerText = d1.toLocaleDateString();
    document.getElementById('summCheckOut').innerText = d2.toLocaleDateString();
    document.getElementById('summNights').innerText = `${nights} night(s)`;
    
    // Set prices in the Radio Selectors
    document.getElementById('priceStandard').innerText = "₱" + (Math.floor(selectedHotel.basePrice * (1 - selectedHotel.discount/100))).toLocaleString();
    document.getElementById('priceSuite').innerText = "₱" + (Math.floor(selectedHotel.basePrice * (1 - selectedHotel.discount/100) * 1.5)).toLocaleString();

    // Set prices in Summary
    document.getElementById('summRoomPrice').innerText = "₱" + roomTotal.toLocaleString();
    document.getElementById('summTaxes').innerText = "₱" + taxes.toLocaleString();
    document.getElementById('summTotal').innerText = "₱" + grandTotal.toLocaleString();
}

function closeModal() {
    document.getElementById('bookingModal').style.display = "none";
}

function finalizeBooking() {
    const btn = document.querySelector('.confirm-book-btn');
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
    
    setTimeout(() => {
        alert(`Booking Confirmed for ${selectedHotel.name}!\nTotal charged: ${document.getElementById('summTotal').innerText}\nCheck your email for the voucher.`);
        closeModal();
        btn.innerHTML = 'Complete Booking';
    }, 2000);
}
