const DataPenyakit = [
    {
        idPenyakit: 'osteoporosis',
        namaPenyakit: 'Osteoporosis',
        description: ' \
            Osteoporosis disebabkan oleh menurunnya kemampuan tubuh dalam meregenerasi tulang sehingga kepadatan tulang berkurang.  \
            Penurunan kemampuan regenerasi ini biasanya akan dimulai saat seseorang memasuki usia 35 tahun. \
            Selain faktor usia, ada beberapa faktor lain yang bisa meningkatkan risiko terjadinya osteoporosis, seperti kekurangan vitamin  \
            D, gangguan hormon, jarang berolahraga, konsumsi obat-obatan tertentu, serta kebiasaan merokok. \
            Osteoporosis sering kali tidak menimbulkan gejala apa pun. Kondisi ini biasanya baru diketahui saat seseorang mengalami  \
            cedera yang menyebabkan patah tulang\
        ',
        gejalaPenyakit: [
            { gejala: 'Sakit punggung' },
            { gejala: 'Menurunnya tinggi badan dari waktu ke waktu' },
            { gejala: 'Postur menjadi bungkuk' },
            { gejala: 'Tulang mudah patah' },
        ]
    },
    {
        idPenyakit: 'osteoarthritis',
        namaPenyakit: 'Osteoarthritis',
        description: ' \
            Osteoarthritis adalah peradangan kronis di sendi akibat kerusakan pada tulang rawan. Osteoarthritis adalah jenis arthritis atau \
            radang sendi yang paling sering terjadi. Kondisi ini menyebabkan keluhan, seperti sendi-sendi terasa sakit, kaku, dan bengkak. \
            Osteoarthritis bisa menyerang semua sendi, tetapi kondisi ini paling sering terjadi di sendi-sendi jari tangan, lutut, pinggul, \
            dan tulang punggung. Gejala osteoarthritis umumnya berkembang secara bertahap seiring waktu.\
            Osteoarthritis tidak bisa disembuhkan. Meski demikian, ada sejumlah tindakan yang dapat dilakukan untuk meringankan gejala, \
            mencegah perburukan, dan membantu penderitanya agar bisa beraktivitas kembali secara mandiri.\
        ',
        gejalaPenyakit: [
            { gejala: 'Nyeri saat menggunakan sendi' },
            { gejala: 'Kaku pada lutut atau panggul terurtama di pagi haru atau setelah duduk lama' },
            { gejala: 'Kesulitan gerak lutut atau panggul dan terasa lebih terbatas ketika duduk, berdiri, naik tangga, atau berjalan' },
            { gejala: 'Sendi berbunyi ketika digerakkan' },
        ]
    },
    {
        idPenyakit: 'skoliosis',
        namaPenyakit: 'Skoliosis',
        description: ' \
            Skoliosis adalah kelainan pada tulang belakang yang ditandai dengan bentuk punggung melengkung seperti huruf C atau S. \
            Skoliosis lebih sering ditemukan pada anak-anak sebelum masa pubertas, yaitu sekitar usia 10–15 tahun. \
            Skoliosis biasanya menimbulkan keluhan ringan, tetapi dapat berkembang menjadi lebih parah seiring pertambahan usia. \
            Jika tidak ditangani, lengkungan skoliosis yang sangat parah dapat menimbulkan kerusakan sendi dan nyeri berkepanjangan.\
            Selain itu, tulang belakang yang melengkung parah juga berisiko mengganggu paru-paru. \
        ',
        gejalaPenyakit: [
            { gejala: 'Tulang belakang yang tampak melengkung' },
            { gejala: 'Salah satu bahu lebih tinggi daripada yang lain' },
            { gejala: 'Salah satu pinggul lebih menonjol daripada yang lain' },
            { gejala: 'Salah satu tulang belikat tampak lebih menonjol daripada yang lain' },
            { gejala: 'Tubuh penderita skoliosis condong ke satu sisi' },
            { gejala: 'Tinggi pinggang tidak rata' },
            { gejala: 'Nyeri punggung bawah' },
            { gejala: 'Kaku pada punggung' },
            { gejala: 'Ketegangan otot' },
        ]
    },
    {
        idPenyakit: 'rheumatoid-arthritis',
        namaPenyakit: 'Rheumatoid Arthritis',
        description: ' \
            Rheumatoid arthritis adalah peradangan jangka panjang pada sendi akibat sistem kekebalan tubuh yang secara keliru menyerang tubuh. \
            Jika dibiarkan, radang sendi yang memburuk bisa menyebabkan gangguan fungsi sendi dan perubahan pada bentuk sendi tersebut. \
            Rheumatoid arthritis ditandai dengan bengkak, nyeri, dan kaku pada sendi. Selain menyerang sendi, rheumatoid arthritis juga bisa  \
            menyerang organ lain, seperti kulit, pembuluh darah, paru-paru, mata, dan jantung. \
            Penyakit ini lebih sering terjadi pada wanita, terutama yang berusia 30–50 tahun. Gejalanya terkadang mirip dengan penyakit lain, \
            seperti polimialgia reumatik dan osteoarthritis. \
        ',
        gejalaPenyakit: [
            { gejala: 'Nyeri sendi' },
            { gejala: 'Sendi membengkak' },
            { gejala: 'Sendi kemerahan, terasa hangat, dan kaku, terutama di pagi hari atau setelah lama tidak digerakkan' },
            { gejala: 'Tubuh terasa lelah dan lemah' },
            { gejala: 'Hilang nafsu makan' },
            { gejala: 'Berat badan menurun' },
            { gejala: 'Demam ringan' },
        ]
    },
    {
        idPenyakit: 'tumor-tulang',
        namaPenyakit: 'Tumor Tulang',
        description: ' \
        Tumor tulang adalah kondisi yang terjadi ketika sel-sel tulang tumbuh secara abnormal. Pertumbuhan tumor tulang dapat dibedakan \
        menjadi tumor jinak (nonkanker) dan tumor ganas (kanker), serta dapat dibagi lagi menjadi beberapa jenis. Gejala tumor tulang  \
        perlu dikenali sejak dini, agar dapat cepat ditangani. \
        Meski penyebab tumor tulang masih belum diketahui secara pasti, tetapi ada beberapa faktor yang diduga sebagai pemicu tumbuhnya  \
        tumor pada tulang, yaitu kelainan genetik (keturunan), cedera pada tulang, dan paparan radiasi dalam intensitas yang tinggi, \
        misalnya akibat radioterapi. \
        ',
        gejalaPenyakit: [
            { gejala: 'Penurunan berat badan' },
            { gejala: 'Banyak berkeringat di malam hari' },
            { gejala: 'Demam di atas 38 derajat celsius' },
            { gejala: 'Kekurangan darah (anemia)' },
            { gejala: 'Mudah merasa lelah' },
            { gejala: 'Sensasi mati rasa' },
            { gejala: 'Sesak napas' },
        ]
    },
]

export default DataPenyakit;