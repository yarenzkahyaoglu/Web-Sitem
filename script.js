// Menü kısmının açılmasını sağlar (eğer varsa)
const menuToggle = document.getElementById("menu-toggle");
if(menuToggle) {
  menuToggle.addEventListener("click", () => {
    const menu = document.getElementById("navbar-menu");
    menu.classList.toggle("show");
  });
}

// Aile üyeleri bilgileri
const familyData = {
  mother: {
    name: "Esin Kahyaoğlu",
    description: "Annem, beni hep desteyleyen ve sevgisiyle kucaklayandır.",
    img: "hakkimda/annem.jpeg"  // Aile resim dosyasını kendin ayarla
  },
  father: {
    name: "Selçuk Kahyaoğlu",
    description: "Babam, ailemizin yapıtaşı ve enerji kaynağıdır.",
    img: "hakkimda/babam.jpeg"
  },
  brother: {
    name: "Yağız Efe Kahyaoğlu",
    description: "Kardeşim, haylaz da olsa her daim benimle gurur duyan kişidir.",
    img: "hakkimda/kardesim.jpeg"
  }
};

// Aile üyesi butonlarına tıklanınca bilgi göster
document.querySelectorAll(".member-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const memberKey = btn.getAttribute("data-member");
    const member = familyData[memberKey];
    if (member) {
      showFamilyModal(member);
    }
  });
});

function showFamilyModal(member) {
  // Modal oluştur ya da varsa güncelle
  let modalHtml = `
    <div class="modal fade" id="familyModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">${member.name}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Kapat"></button>
          </div>
          <div class="modal-body text-center">
            <img src="${member.img}" alt="${member.name}" class="img-fluid rounded mb-3" style="max-height: 200px;">
            <p>${member.description}</p>
          </div>
        </div>
      </div>
    </div>
  `;

  // Modal elementini sayfaya ekle
  let existingModal = document.getElementById("familyModal");
  if (existingModal) {
    existingModal.outerHTML = modalHtml;
  } else {
    document.body.insertAdjacentHTML("beforeend", modalHtml);
  }

  // Modalı Bootstrap ile aç
  const modalElement = document.getElementById("familyModal");
  const modal = new bootstrap.Modal(modalElement);
  modal.show();
}

// Arkadaş bilgileri
const friendsData = {
  iclal: {
    name: "İclal",
    description: "Lisedeki hem sıra arkadaşım hem sırdaşım. Her zaman yanımda ve destekçimdir. Benim için bir kız kardeşten farkı yoktur.",
    img: "hakkimda/iclal.jpg"
  },
  dilara: {
    name: "Dilara",
    description: "Lisedeki yurt oda arkadaşım. Birlikte yurdun zorluklarına göğüs gerdik, birlikte ağladık, birlikte güldük. Onu çok seviyorum.",
    img: "hakkimda/dilara.JPG"
  }
};

function showFriendInfo(friendKey) {
  const friend = friendsData[friendKey];
  if (!friend) return;

  // Modal içeriklerini doldur
  const friendName = document.getElementById("friend-name");
  const friendPhoto = document.getElementById("friend-photo");
  const friendInfo = document.getElementById("friend-info");

  friendName.textContent = friend.name;
  friendPhoto.src = friend.img;
  friendPhoto.alt = friend.name;
  friendInfo.textContent = friend.description;

  // Bootstrap modal aç
  const friendModalEl = document.getElementById("friendModal");
  const friendModal = new bootstrap.Modal(friendModalEl);
  friendModal.show();
}


//kahraman kısmı
function showLegend() { document.getElementById("legendPopup").style.display = "block"; }
function hideLegend() { document.getElementById("legendPopup").style.display = "none"; }

