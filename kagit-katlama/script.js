const kagitSayisi = document.querySelector(".kagit")
const kagitSoz = document.querySelector(".kagit-text")
const kagitBoyut = document.querySelector(".kagit-soz")
const geriBtn = document.querySelector(".geri")
const ilerliBtn = document.querySelector(".ileri")
const resim = document.querySelector(".resim")

const bilgiler = [
    {
        image: "https://neal.fun/paper/paper.jpg",
        kalinlik: "Kağıdın boyutu 0.1mm.",
        text: "Bir parça kağıdın var." 
    },
    {
        image: "https://neal.fun/paper/hair.jpg",
        kalinlik: "Kağıdın boyutu 0.2mm.",
        text: "Bir insan saç teli kalınlığında." 
    },
    {
        image: "https://neal.fun/paper/sand.jpg",
        kalinlik: "Kağıdın boyutu 0.4mm.",
        text: "Kum tanesi kalınlığında." 
    },
    {
        image: "https://neal.fun/paper/pencil-tip.jpg",
        kalinlik: "Kağıdın boyutu 0.8mm.",
        text: "Kalem ucu kalınlığında." 
    },
    {
        image: "https://neal.fun/paper/spaghetti.jpg",
        kalinlik: "Kağıdın boyutu 1.6mm.",
        text: "Bir spagetti tanesinin kalınlığı." 
    },
    {
        image: "https://neal.fun/paper/ladybug.jpg",
        kalinlik: "Kağıdın boyutu 3.2mm.",
        text: "Uğur böceği yüksekliğinde." 
    },
    {
        image: "https://neal.fun/paper/sunflower-seed.jpg",
        kalinlik: "Kağıdın boyutu 6.4mm.",
        text: "Çekirdek kalınlığında." 
    },
    {
        image: "https://neal.fun/paper/coffee-bean.jpg",
        kalinlik: "Kağıdın boyutu 12.8mm.",
        text: "Kahve Çekirdeği uzunluğunda." 
    },
    {
        image: "https://neal.fun/paper/penny.jpg",
        kalinlik: "Kağıdın boyutu 25.6mm.",
        text: "Bozuk para genişliğinde." 
    },
    {
        image: "https://neal.fun/paper/chicken-egg.jpg",
        kalinlik: "Kağıdın boyutu 51.2mm.",
        text: "Tavuk yumurtası uzunluğunda." 
    },
    {
        image: "https://neal.fun/paper/hummingbird.jpg",
        kalinlik: "Kağıdın boyutu 10.2cm.",
        text: "Sinek kuşu uzunluğunda." 
    },
    {
        image: "https://neal.fun/paper/basketball.jpg",
        kalinlik: "Kağıdın boyutu 20.5cm.",
        text: "Basketbol topu uzunluğunda" 
    },
    {
        image: "https://neal.fun/paper/bowling-pin.jpg",
        kalinlik: "Kağıdın boyutu 41cm.",
        text: "Bowling lobotunun uzunluğunda." 
    },
    {
        image: "https://neal.fun/paper/cheetah.jpg",
        kalinlik: "Kağıdın boyutu 81.9cm.",
        text: "Çita uzunluğunda." 
    },
    {
        image: "https://neal.fun/paper/woman.jpg",
        kalinlik: "Kağıdın boyutu 1.6m.",
        text: "Ortalama bir kadın boyutunda." 
    },
    {
        image: "https://neal.fun/paper/beetle.jpg",
        kalinlik: "Kağıdın boyutu 3.3m.",
        text: "Volkswagen kaplumbağa uzunluğunda." 
    },
    {
        image: "https://neal.fun/paper/giraffe.jpg",
        kalinlik: "Kağıdın boyutu 6.6m.",
        text: "Zürafa uzunluğunda." 
    },
    {
        image: "https://neal.fun/paper/oak-tree.jpg",
        kalinlik: "Kağıdın boyutu 13.1m.",
        text: "Ortalama bir meşe ağacı uzunluğunda." 
    },
    {
        image: "https://neal.fun/paper/blue-whale.jpg",
        kalinlik: "Kağıdın boyutu 26.2m.",
        text: "Mavi balina uzunluğunda." 
    },
    {
        image: "https://neal.fun/paper/boeing.jpg",
        kalinlik: "Kağıdın boyutu 52.4m.",
        text: "Boeing 747 kanat açıklğı kadar." 
    },
    {
        image: "https://neal.fun/paper/statue-of-liberty.jpg",
        kalinlik: "Kağıdın boyutu 104.9m.",
        text: "Özgürlük heykelinin yüksekliği kadar." 
    },
    {
        image: "https://neal.fun/paper/gateway-arch.jpg",
        kalinlik: "Kağıdın boyutu 209.7m.",
        text: "Geçit kemerinin yüksekliği kadar." 
    },
    {
        image: "https://neal.fun/paper/eiffel-tower.jpg",
        kalinlik: "Kağıdın boyutu 419.4m.",
        text: "Eyfel kulesinin yüksekliği kadar." 
    },
    {
        image: "https://neal.fun/paper/burj-khalifa.jpg",
        kalinlik: "Kağıdın boyutu 838.9m.",
        text: "Şimdi ise Bruj Khalfia kadar." 
    },
    {
        image: "https://neal.fun/paper/kentucky.jpg",
        kalinlik: "Kağıdın boyutu 1.7km.",
        text: "Kentucky Derby uzunluğunda(Baba tarafı texaslı)" 
    },
    {
        image: "https://neal.fun/paper/central-park.jpg",
        kalinlik: "Kağıdın boyutu 3.4km.",
        text: "Central Park Boyutunda" 
    },
    {
        image: "https://neal.fun/paper/las-vegas.jpg",
        kalinlik: "Kağıdın boyutu 6.7km.",
        text: "Las Vegas Strip uzunluğunda " 
    },
    {
        image: "https://neal.fun/paper/mount-everest.jpg",
        kalinlik: "Kağıdın boyutu 13.4km.",
        text: "Everst Dağından daha yüksek " 
    },
    {
        image: "https://neal.fun/paper/mariana-trench.jpg",
        kalinlik: "Kağıdın boyutu 26.8km.",
        text: "Mariana çukurundan daha derin" 
    },
    {
        image: "https://neal.fun/paper/rhode-island.jpg",
        kalinlik: "Kağıdın boyutu 53.7km.",
        text: "Rhode Island eyaletiden daha büyük(Dedemlerden oradan geliyor)" 
    },
    {
        image: "https://neal.fun/paper/space.jpg",
        kalinlik: "Kağıdın boyutu 107.4km.",
        text: "Atmosferin başladığı yer" 
    },
    {
        image: "https://neal.fun/paper/suez-canal.jpg",
        kalinlik: "Kağıdın boyutu 214.7km.",
        text: "Süveyş kanalından daha uzun" 
    },
    {
        image: "https://neal.fun/paper/grand-canyon.jpg",
        kalinlik: "Kağıdın boyutu 429.5km.",
        text: "Büyük kanyondan daha büyük" 
    },
    {
        image: "https://neal.fun/paper/grand-canyon.jpg",
        kalinlik: "Kağıdın boyutu 859km.",
        text: "Yarış pistinde 500 tur attın mı? işte senin kağıt o kadar" 
    },
    {
        image: "https://neal.fun/paper/california.jpg",
        kalinlik: "Kağıdın boyutu 1,718km",
        text: "kaliforniya'dan bile büyük sen düşün" 
    },
    {
        image: "https://neal.fun/paper/pluto.jpg",
        kalinlik: "Kağıdın boyutu 3,436",
        text: "Pluto'nun çapından daha uzun" 
    },
    {
        image: "https://neal.fun/paper/mars.jpg",
        kalinlik: "Kağıdın boyutu 6,872km",
        text: "Mars'ın çapı kadar" 
    },
    {
        image: "https://neal.fun/paper/newyork-sydney.jpg",
        kalinlik: "Kağıdın boyutu 13,744km",
        text: "New york'tan sydney'e kadar" 
    },
    {
        image: "https://neal.fun/paper/earth.jpg",
        kalinlik: "Kağıdın boyutu 27,448km",
        text: "Dostum kağıtın dünyayı dolaştı" 
    },
    {
        image: "https://neal.fun/paper/neptune.jpg",
        kalinlik: "Kağıdın boyutu 54,976km",
        text: "Neptün'nün çapı kadar" 
    },
    {
        image: "https://neal.fun/paper/saturn.jpg",
        kalinlik: "Kağıdın boyutu 109,951km",
        text: "Satürn halkaları hariç çapı kadar" 
    },
    {
        image: "https://neal.fun/paper/ProximaCentauri.jpg",
        kalinlik: "Kağıdın boyutu 219,902km",
        text: "Kırmızı bir yıldızın çapı kadar" 
    },
    {
        image: "https://neal.fun/paper/moon.jpg",
        kalinlik: "Kağıdın boyutu 439,805km",
        text: "Tebrikler, kağtınız sadece 42 katlama ile ay'a ulaştı(Denedim. Bana güvenin)" 
    },
]

let index = 0;

function ekran(){
    const item = bilgiler[index]
        
        const itemResim = item.image;
        const itemText = item.text;
        const itemKalinlik = item.kalinlik;

        kagitSayisi.innerHTML = index;
        resim.src = itemResim;
        kagitSoz.innerHTML = itemKalinlik;
        kagitBoyut.innerHTML = itemText;
}

ilerliBtn.addEventListener("click", function(){
    if(index < bilgiler.length -1){
        index++;
        ekran()
        if(index === 42){
            ilerliBtn.classList.add("active")
        }
        geriBtn.classList.add("active")
    }
})

geriBtn.addEventListener("click", function(){
    if(index > 0){
        index--;
        if(index < 42){
            ilerliBtn.classList.remove("active")
        }
        if(index === 0){
            geriBtn.classList.remove("active")
        }
        ekran()
    }
})

ekran()