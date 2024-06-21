// import React from 'react';
import './Footer.css'
function Footer() {
  return (
    <>
    <div className="Footer_main_component">
      <div className="footer_container_content">
        <div className="footer_link_container" style={{ width: '250px' }}>
          <p className="footer_link">
            Askmeidentity is a registered trademark of Modern Identity Private Limited, Bengaluru, India.
          </p>
          <br />
          <a href="https://www.facebook.com/askmeidentity">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADK0lEQVR4nO2Zz08TQRTHNzM0MQHixaMnI2jE4Mmr/4A/okej3r0oAn+AiYke9IYkpDNFDAkRqokHL4bEEzFelIqAJP5IDPvetrXQAhXSsrRjplYMboGdnd0th/0m79TN7Pcz8+bN7KthRIoUKZJUbNg8Qxj0UYZJwnCGcsxTjpv1yBOGH2u/cbNXPmscCCVy7YRDP2XwmXIUSsFgXgIbg9m28I3fFS1yJinDZWXjDhBcIgzvyDHDMR/Hk4RjStv4f0EYThsJOBGodxqHS5RD0W/z9F9arVEOFwMxTxLWDcrBDsw8/xtgE25dD2LmQzCP2xCUwQV/3A+ZHX+WVs9U24glOiey4uzLn6LreVZ0jGfE4afWXhBFud98qDbeN2wLR3H1TV5Mpctis1IVjXR5cnn3jc3hg1Z1qpVKj+YPDVti4vuG2E9X9gCoQcSxx5v70XQr5ZDzCvBwpriveTcA8pyQB6aH2Yd+r+aPjmVEeZeUUQbg8oyAPmUAT9eDevS+W2lotlCuiPupNXFzqrAdx55l9h+TwbySeXnZ0qk4498a5/65VznPY8YS6dOhpI+Mt5myw/zs8qbn8ajqZpbXXp2XzeVtB8DY1w0tAMpwXGEF8JPOyxYKToDHc7/0VoBjSmUFlvwGGNAEoBxyKgDlgweApUAA7k2viXypsiO2GhwBpa2q47l8qSK6X2QDAXCdQo9cnriNVBVCtI9Y/qeQyibWAfhR3ApsEyfDAJiEUkBlVLZHQgAYUNjYhONt1wAxbnarfKgcGU3viC8rzirEFtYdz7U+cZv/KGIs3eUaoL4KswolLtgyyhQvc6ppFDQA4WZvqB80vgIwXPLcvZMds2YDEIa3DK2PeobTzQIgHN4bSUENLfHF45TBavgA4ENbpS7Z7lNpbOkDgE0T5nnDT8l2n1sIPQCwCcNrRhCS7T43XTrPAAxWfZ95hxh0yo6Z3wBEbtghs8MIRbI6xbFnt2u3GgDkaqVSu9p40WC2TZ7YhMOcKoC8qhB5wjblL6YGkpet2qpwnHhtlgqLRbuybleFDLNoVx6kVi15Ja61R4atU832GylSJONg6DekIcfGE7hs2QAAAABJRU5ErkJggg==" 
              alt="Facebook"
              style={{ width: '35px' }}
            />
          </a>
          <a href="https://www.linkedin.com/company/modern-identity-private-limited/mycompany/">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAByElEQVR4nO2ZP0/CQBjG22scXI2Tiauy+glc3MC4+iX8DA6G9IiDJsYBBhdNHJwcNRGIHY3xjoBCgkTEAUP8A63yt7ymBVQEIq2mvSb3JM/UN5fnd+97N1wFgYuLi4tpSTJdQTKJI5lqCFNwxDLVRExjkkyW/xRexAQ7FhoPt4hJ0P7OuxwedS2FSMAygDk2DIRHRhdkGrUOgInqdnDUs0wqNgAYCI6//G8AvkgazgsaaA0dlIIG8+G0twCUggbfFb/XvAWgNfQ+ALWuewtA8XoHfJG0CWF0IpZXYS584y0A5JIFDoA7OzFM43yf3b2G7YsSpEpVqDbb8FprmaO4dvoAk5sJtgEW9jLw+NaEUbosvsPMTopdgOxLHX5TLK+CxCrAuPIf5dgE0Ntgzv/S4S2sHucheqcOrdtPPrMJsK4U+2omQgk4yVUG6jJPNTYBpreTA+ssHmQH6sq1FnsA7R/fe57aSo5d63oH7K6FOADmHTDFRwjzQ0z5LYT4NWpRo24Otyx4+mkR07JlAON9noHgYFjE9MwygPFzwe3gqGsJX/ktA3S6QIJuhxcx2bAV/rMTIRIw3uedPRNENcbG9s5zcXFxCU7pA5Jwntel+S2tAAAAAElFTkSuQmCC" 
              alt="LinkedIn"
              style={{ width: '35px' }}
            />
          </a>
          <a href="https://www.instagram.com/askmeidentity/">
            <img
              src="data:image/png;base64,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"
              alt="Instagram"
              style={{ width: '35px' }}
            />
          </a>
          <a href="https://www.youtube.com/@askmeidentity">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACQ0lEQVR4nO2Yu2sUURjFTyImwSKSCGJja6GoRUDU+b4kapMiYiFpLCyiEV9gaSdCRA2xyT+QIo9GsVGiATHgu1C08IGPShK08RVxCUbYI3fcWXRJnJnM3Z0ZvT84sAyz3z2HOzP33g9wOBwOh+N/gLuwih4208NuKo5TMUDBGAUTFNyn4AUF76j45EswRwV9/fodXDf3PKfgnv9fxSgF56g45tc2Y2xFa3LDQD0FfRRMUVEom6mdCqWxDxKoi2d+PRoomEzBNBfRNbZhefQAggsZMM0KDUQz34EmCr5kwDArNMs2rAgP4KEzA2a5oNqxI0qA3tSN6iIS9EV5/vtTN6oJ3gMKxhMN8vAGuX9DtWbgcpQAtxINYvgxT14aIrtW2g7xJEqAx4kDBMx+IIdOkB31tgLMhAdQvLIWIODlI/LIdhsBvoeuyial9QCGYpGcukjuXZssRBcawx6hz1UJEDD3jRw+Te5sXFr9LWgOm4H5qgYImHlDnuqJX38bVmcjwPRr8mR3/PqCljw/QkX2YFl6L/HkCLlnzdJrK77+1XzmP6OC6douZB/fk4OH7C1kgqc13ko02zGuZd2t/mbuwQS5b51t4yzNwHi+t9OC/nwfaDz05vtI6aHz3z/UGygYzIBhVug8YjW2FNczYJq+TAsyTmPLDwHUUXEg5dbiTf+jEre1uGAgQQvbsZGCbioOU3GGihEqrlBw26ySVLwtN3H/DF347bq55xkVd6i4WmrunqXgqF9bsMlKc9fhcDgcDuSAn9VThUlTulWSAAAAAElFTkSuQmCC"
              alt="YouTube"
              style={{ width: '35px' }}
            />
          </a>
          <a href="https://whatsapp.com/channel/0029VaC7tgWDTkJxJosRqK2G">
            <img
              src="data:image/png;base64,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"
              alt="WhatsApp"
              style={{ width: '30px' }}
            />
          </a>
          <br />
        </div>
        <div className="footer_link_container">
          <a className="footer_link" href="/idam?sid=1">Askmeidentity Services</a><br />
          <a className="footer_link" href="/maintraining">Training</a><br />
          <a className="footer_link" href="/contact">Contact us</a><br />
          <a className="footer_link" href="/about">About us</a><br />
          <a className="footer_link" href="/all-training?name=IAM">Career</a><br />
          <a className="footer_link" href="/blog">Blogs</a><br />
        </div>
        <div className="footer_link_container">
          <a className="footer_link" href="/term">Term</a><br />
          <a className="footer_link" href="/contact">Support</a><br />
          <a className="footer_link" href="/refund">Returns and Refund</a><br />
          <a className="footer_link" href="/privacy">Privacy policy</a><br />
        </div>
        <div className="footer_link_container">
          <p className="footer_link" style={{ width: '250px' }}>
            Sri Jagannath Nivas,<br />
            8-1-164/345/A/1, Pragati Colony, Mailardevpally, Nawab Saheb Kunta, Hyd, 500005
          </p>
        </div>
        <div
          className="mobile_footer_link"
          style={{ position: 'absolute', bottom: '10px', right: '10px' }}
        >
          <p className="footer_link">© 2023 askmeidentity, Inc.</p>
        </div>
        <div
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            border: '1px solid white',
            borderRadius: '30px',
          }}
        >
          <p className="footer_link" style={{ padding: '4px 20px 0px' }}>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFBSURBVHgBrVSBcYMwDFR6HYBu0A3CCGxQNkhGYIN2g2aUdgLYgGQCswEjOFbuRYQsEpKL7v4wj/xCjzDRiogxFgx6NiDQJLQJY7zGCG7/iFiVECAwOILyjK/lPbGdSmbhGvc/CQeshRfh3ZJYiYRe/MI6KBtYpFX3vRTxBANQqNaj9gu+TgKqyLRPEvdIrBUnLRaKK+DjwXjO0WjBVlpTHLfTOZ1wbm+4Qax4A8df69/sZe5IeZwSPg33h3zaoKUxYQAkKocjiDE6h/t4N8kbysPjbvEXD2ZGL3HgLx/L4bjLyUP26svsHRK2lMeWcm9570lXmM2XruqMTTRjU9t5dQfUmy81r5Xdl/WhBPSv15oiQWYwzn89/5BQbxDQihT5TfjGWviQtbogWsb5EXXr+KpobeBtO0eQuSa+4ARfJXAG76xpWr48thwAAAAASUVORK5CYII=" 
              alt=""
              style={{ padding: '0px 5px' }}
            />
            English
          </p>
        </div>
      </div>
      <img
        className="footerlogo_place"
        src="/static/media/Logo 2.bbcdc9ba6b6767462643.png"
        alt=""
        style={{
          position: 'absolute',
          bottom: '10px',
          left: '14%',
          width: '150px',
          marginBottom: '20px',
        }}
      />
      
      
    </div>
    <div
    style={{
      height: '30px',
      backgroundColor: 'rgb(225, 247, 212)',
      textAlign: 'center',
    }}
  >
    <p style={{ fontSize: '15px', fontFamily: 'Inter', paddingTop: '5px' }}>
      Copyright @ 2023 askmeidentity. All Rights Reserved
    </p>
  </div>
  </>
  );
};

export default Footer;
