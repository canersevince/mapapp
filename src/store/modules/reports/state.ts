import {Report} from "src/models/report";

export interface ReportStateInterface {
  reports: Report[]
}

const state: ReportStateInterface = {
  reports: [
    {
      _id: "1",
      CATEGORY: "Çöp Birikintisi",
      CREATED: new Date(),
      CREATOR: "Caner Sevince",
      DESCRIPTION: "Bu örnek amaçlı yaratılmış bir şikayet bildirimidir.",
      IMAGE_BASE64: "https://www.ereglionder.com.tr/images/haberler/onder_6044275164.jpg",
      IMAGE_SRC: "https://www.ereglionder.com.tr/images/haberler/onder_6044275164.jpg",
      REPLY: [{_id: "1", CREATED: new Date(), ICON: "add_task", MESSAGE: "Şikayetiniz ekiplerimize iletilmiştir."},
              {_id: "2", CREATED: new Date(), ICON: "add_task", MESSAGE: "Şikayetiniz ekiplerimizce incelenmektedir. En yakın zamanda çözülecektir."},
              {_id: "3", CREATED: new Date(), ICON: "done", MESSAGE: "Ekibimiz şikayetinizi 04.10.2020 tarihindeki bakım dahilinde çözmüş bulunmaktadır. Şikayetiniz çözülmedi ise yukarıdaki butona basarak tekrar oluşturabilirsiniz."}],
      STATUS: "closed",
      TITLE: "Örnek Çöp Şikayeti",
      LAT_LNG: [40.98226800, 29.0294900],
      RATING: null
    },
    {
      _id: "2",
      CATEGORY: "Su Kesintisi",
      CREATED: new Date(),
      CREATOR: "Caner Sevince",
      DESCRIPTION: "Bu örnek amaçlı yaratılmış bir şikayet bildirimidir.",
      IMAGE_BASE64: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAJ1BMVEXt7e3V1dXW1tbm5ubs7Ozg4ODc3NzS0tLw8PDo6OjZ2dnj4+Pe3t5T9WAhAAAEmklEQVR4nO2ciXKsIBBFsQUB9f+/9+EuKjPEpe2X3FOVSTJlAmdaWRpUKQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8Pbnh9mr4Uza+nnSpbChTTy0M/hNfKeNeXyIshW/BReaVZ4+h8zSY3lESG008rz+a30LIqFpbYDa1huxC1qovQDHAbUuG5DF3Tl8cmORdTs/Ua9VxuzUHXaA+WnsnQD90EUa1ZPlRtChoMuRobs5w0PLiGphJ5YlgNxVnGHrgeTlOuIkdD4imtx/B+qKNhzThOLF8xJE5D+4ohT2k9MLwZGD4ADG8Ghg8Aw5uB4QPINRxqdH14J9awmyG7summ5tfqJthQO1NY21wtUrKh7zJW9mqWTLLhcPDV9INYQ6XHqhXGXaqcXEM1L2/4S2k5qYbaNfP61LXEnFRDpWhJize/MIbrEAau1E6qoV75FfZKwlqmoVYmWiWmUp1ex5VpqKIQdhdkOG9/l2EcwuDYnu4UZRrq7frihSVOgYahKm2xUzw9eBNoqJy3O8Pi9CRDoqGqhv0+UQzpbKco0bAs9iEMVOeKlGeoVWpH0bnBmzxD5VMbbuhUJQUapkJI9tR5Ks+w+bBnqnRxXqr7razMx30d8gzTu4nI1nE1O8HWfkl0SDN0TXq7lKUwyYgqqrvDw9uftq1JM9RftoP57eF09PYaYYbOpNRG6vUIXLtqrH6bPk+FGX4LYdcpLripVSJbupSjMMNvISyiwZsu5sFdOlsly1Afa8Xn6Xzw9N96geTAXJShazMMi3I4WOsmejtlIMowbws4jRmbOOA2tV1dkGFoGbMMu9O0q24VZzpSSziCDKfttV8iSGOSv9wODRKjVkGGrs7Z/G0b1w/XdDy6Cz/b8rBIQYal3U7sj6j70WhoR+12AEt02CVKMdTpWVNk0TeZ4as5SgM0R8NTIYZDnTMYL7bjjpOO8uJCDFVeCKebX1Kt7tEcQ4xhXgjH/dPJgw96DCmGuyz3MdQ1pc4nj632QRRi+HXWNNJNghvz4cPwO0Uhht9nTeMfhqp+PGCf0BBimBnC8a8/fRzNdpFKhmFuCDOoZcYwa9aUyXZFXIThrTfO0qbHeN1QL+/exKbHeN1QZc6a8tnMMV431GHWdPM9s3W07/Z1Q+XKgxXfS8RZqfcN84bcP4LW6zfvG2YOuX9EGwavk9HrhvqBEEYbNt82/LTWdIFVVuptwweuwp6l23/bUD/zHJfVbsa3Df3nmcJpltP0bcPwziNR9GJaGqUbU91LG1g9BeN9w2v3GiSR0x8+9AAQSWOap4Hhzfx6Q1eNzxdiKU1F6yFshn0ILdPjcPoUCU2GLGVOeVG2p4u5aZWK68Lw/Vkavswdt/jmFDiN7A9WNB5hSf3WhoPpFKXrd9tmCi63irA8sI3mb+f2F58xvDF/n6VIwytXCFW/2Y7zyZ6TJVv3pPpnxPGzW655Ere9a+tpqLAVp2D/BNOa1TG54+1JfMXW4JDhDeCM9r5kwL+k92d4/vNFBAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4Y/wDpoY2HBKwqLIAAAAASUVORK5CYII=",
      IMAGE_SRC: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAJ1BMVEXt7e3V1dXW1tbm5ubs7Ozg4ODc3NzS0tLw8PDo6OjZ2dnj4+Pe3t5T9WAhAAAEmklEQVR4nO2ciXKsIBBFsQUB9f+/9+EuKjPEpe2X3FOVSTJlAmdaWRpUKQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8Pbnh9mr4Uza+nnSpbChTTy0M/hNfKeNeXyIshW/BReaVZ4+h8zSY3lESG008rz+a30LIqFpbYDa1huxC1qovQDHAbUuG5DF3Tl8cmORdTs/Ua9VxuzUHXaA+WnsnQD90EUa1ZPlRtChoMuRobs5w0PLiGphJ5YlgNxVnGHrgeTlOuIkdD4imtx/B+qKNhzThOLF8xJE5D+4ohT2k9MLwZGD4ADG8Ghg8Aw5uB4QPINRxqdH14J9awmyG7summ5tfqJthQO1NY21wtUrKh7zJW9mqWTLLhcPDV9INYQ6XHqhXGXaqcXEM1L2/4S2k5qYbaNfP61LXEnFRDpWhJize/MIbrEAau1E6qoV75FfZKwlqmoVYmWiWmUp1ex5VpqKIQdhdkOG9/l2EcwuDYnu4UZRrq7frihSVOgYahKm2xUzw9eBNoqJy3O8Pi9CRDoqGqhv0+UQzpbKco0bAs9iEMVOeKlGeoVWpH0bnBmzxD5VMbbuhUJQUapkJI9tR5Ks+w+bBnqnRxXqr7razMx30d8gzTu4nI1nE1O8HWfkl0SDN0TXq7lKUwyYgqqrvDw9uftq1JM9RftoP57eF09PYaYYbOpNRG6vUIXLtqrH6bPk+FGX4LYdcpLripVSJbupSjMMNvISyiwZsu5sFdOlsly1Afa8Xn6Xzw9N96geTAXJShazMMi3I4WOsmejtlIMowbws4jRmbOOA2tV1dkGFoGbMMu9O0q24VZzpSSziCDKfttV8iSGOSv9wODRKjVkGGrs7Z/G0b1w/XdDy6Cz/b8rBIQYal3U7sj6j70WhoR+12AEt02CVKMdTpWVNk0TeZ4as5SgM0R8NTIYZDnTMYL7bjjpOO8uJCDFVeCKebX1Kt7tEcQ4xhXgjH/dPJgw96DCmGuyz3MdQ1pc4nj632QRRi+HXWNNJNghvz4cPwO0Uhht9nTeMfhqp+PGCf0BBimBnC8a8/fRzNdpFKhmFuCDOoZcYwa9aUyXZFXIThrTfO0qbHeN1QL+/exKbHeN1QZc6a8tnMMV431GHWdPM9s3W07/Z1Q+XKgxXfS8RZqfcN84bcP4LW6zfvG2YOuX9EGwavk9HrhvqBEEYbNt82/LTWdIFVVuptwweuwp6l23/bUD/zHJfVbsa3Df3nmcJpltP0bcPwziNR9GJaGqUbU91LG1g9BeN9w2v3GiSR0x8+9AAQSWOap4Hhzfx6Q1eNzxdiKU1F6yFshn0ILdPjcPoUCU2GLGVOeVG2p4u5aZWK68Lw/Vkavswdt/jmFDiN7A9WNB5hSf3WhoPpFKXrd9tmCi63irA8sI3mb+f2F58xvDF/n6VIwytXCFW/2Y7zyZ6TJVv3pPpnxPGzW655Ere9a+tpqLAVp2D/BNOa1TG54+1JfMXW4JDhDeCM9r5kwL+k92d4/vNFBAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4Y/wDpoY2HBKwqLIAAAAASUVORK5CYII=",
      REPLY: [{_id: "1", CREATED: new Date(), ICON: "add_task", MESSAGE: "Şikayetiniz ekiplerimize iletilmiştir."}],
      STATUS: "active",
      TITLE: "Örnek Su Kesintisi",
      LAT_LNG: [40.98226800, 29.0294900],
      RATING: null
    },
    {
      _id: "3",
      CATEGORY: "Yol Sorunları",
      CREATED: new Date(),
      CREATOR: "Caner Sevince",
      DESCRIPTION: "Bu örnek amaçlı yaratılmış bir şikayet bildirimidir.",
      IMAGE_SRC: "https://im.haberturk.com/yerel_haber/2018/12/13/ver1544688481/65373697_620x410.jpg",
      IMAGE_BASE64: "https://im.haberturk.com/yerel_haber/2018/12/13/ver1544688481/65373697_620x410.jpg",
      REPLY: [{_id: "1", CREATED: new Date(), ICON: "add_task", MESSAGE: "Şikayetiniz ekiplerimize iletilmiştir."},
              {_id: "2", CREATED: new Date(), ICON: "done", MESSAGE: "Şikayetiniz ekiplerimiz tarafınca yapılan 04.10.2020 tarihli bakım sonucunda çözülmüştür."}],
      STATUS: "closed",
      TITLE: "Örnek Yol Şikayeti",
      LAT_LNG: [40.98226800, 29.0294900],
      RATING: null
    }
  ],
};

export default state
