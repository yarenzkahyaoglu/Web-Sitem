/* Menü kısmının açılmasını sağlar */
document.getElementById("menu-toggle").addEventListener("click", function () {
  const menu = document.getElementById("navbar-menu");
  menu.classList.toggle("show");
});

// AİLE ÜYELERİ KISMI
  const familyData = {
    mother: {
      name: "Esin Kahyaoğlu (Annem)",
      photo: "hakkimda/annem.jpeg",
      info: "Ford Otosan'da Fabrika Müdürlüğü'nde çalışıyor.",
      detail: "Ailemizin bütünlüğünü sağlayıp bize sonsuz sevgisini veren annemdir."
    },
    father: {
      name: "Selçuk Kahyaoğlu (Babam)",
      photo: "hakkimda/babam.jpeg",
      info: "Ford Otosan'da atölye ekip lideri olarak çalışıyor.",
      detail: "Ailemizin yapıtaşı ve eğlence kaynağımız babamdır."
    },
    brother: {
      name: "Yağız Efe Kahyaoğlu (Kardeşim)",
      photo: "hakkimda/kardesim.jpeg",
      info: "Yaramaz bir ilkokul 3. sınıf öğrencisi.",
      detail: "Ailemizin  tatlış haylazı kardeşimdir."
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


// ARKADAŞLAR KISMI
const friends = {
  iclal: {
    name: "İclal Yıldırım",
    photo: "hakkimda/iclal.jpg",
    info: "İclal benim liseden arkadaşım.O benim lise hayatım boyunca sıra arkadaşım aynı zamanda sırdaşımdı. Benim için bir kız kardeşten farkı yok."
  },
  dilara: {
    name: "Dilara Korkmaz",
    photo: "hakkimda/dilara.JPG",
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

//dinleme için 
function playAudio() { document.getElementById("historyAudio").play(); }

//kahraman kısmı
function showLegend() { document.getElementById("legendPopup").style.display = "block"; }
function hideLegend() { document.getElementById("legendPopup").style.display = "none"; }




