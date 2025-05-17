/* Menü kısmının açılmasını sağlar */
document.getElementById("menu-toggle").addEventListener("click", function () {
  const menu = document.getElementById("navbar-menu");
  menu.classList.toggle("show");
});

// Aile Üyeleri
  const familyData = {
    mother: {
      name: "Esin Kahyaoğlu (Annem)",
      photo: "annem.jpeg",
      info: "Ford Otosan'da Fabrika Müdürlüğünde çalışıyor.",
      detail: "Ailemizin bütünlüğünü sağlayıp bize sonsuz sevgisini veren annem."
    },
    father: {
      name: "Selçuk Kahyaoğlu (Babam)",
      photo: "babam.jpeg",
      info: "Ford Otosan'da atolye ekip lideri.",
      detail: "Ailemizin yapıtaşı babam."
    },
    brother: {
      name: "Yağız Efe Kahyaoğlu (Kardeşim)",
      photo: "kardesim.jpeg",
      info: "Yaramaz bir ilkokul 3. sınıf öğrencisi",
      detail: "Ailemizin neşe kaynağı kardeşim."
    }
  };
  // Butonlara Tıklama Eventi
  document.querySelectorAll('.member-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const member = this.getAttribute('data-member');
      showMemberInfo(member);
    });
  });

  // Bilgi Göster
  function showMemberInfo(member) {
    const data = familyData[member];
    const card = document.getElementById('familyCard');
    
    document.getElementById('memberName').textContent = data.name;
    document.getElementById('memberPhoto').src = data.photo;
    document.getElementById('memberInfo').textContent = data.info;
    document.getElementById('memberDetail').textContent = data.detail;
    
    card.classList.remove('hidden');
  }

  // Kapat Butonu
  document.querySelector('.close-btn').addEventListener('click', function() {
    document.getElementById('familyCard').classList.add('hidden');
  });

  // Dışarı Tıklayınca Kapatma
  window.addEventListener('click', function(e) {
    const card = document.getElementById('familyCard');
    if (e.target === card) {
      card.classList.add('hidden');
    }
  });


// Arkadaşlar
const friends = {
  iclal: {
    name: "İclal Yıldırım",
    photo: "iclal.jpg",
    info: "İclal benim liseden arkadaşım.O benim lise hayatım boyunca sıra arkadaşım aynı zamanda sırdaşımdı."
  },
  dilara: {
    name: "Dilara Korkmaz",
    photo: "dilara.JPG",
    info: "Dilara benim lisedeki oda arkadaşım. Dört sene boyunca beraber yurdun zorluklarına göğüs gerdik. Gerek ağladık, gerek güldük ama hiç birbirimizden ayrılmadık."
  }
};

function showFriendInfo(friendId) {
  const friend = friends[friendId];
  const modal = document.getElementById('friend-modal');
  
  document.getElementById('friend-name').textContent = friend.name;
  document.getElementById('friend-info').textContent = friend.info;
  document.getElementById('friend-photo').src = friend.photo;
  
  modal.style.display = 'block';
}

function closeModal() {
  document.getElementById('friend-modal').style.display = 'none';
}

// Dışarı tıklayınca kapatma
window.onclick = function(event) {
  const modal = document.getElementById('friend-modal');
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}



//slide için
 // Otomatik geçiş
  let index = 0;
  const slides = document.querySelectorAll('.slide');
  setInterval(() => {
    slides.forEach((slide, i) => {
      slide.style.opacity = i === index ? '1' : '0';
    });
    index = (index + 1) % slides.length;
  }, 4000);

  // Smooth scroll fonksiyonu
  function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }