import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';

const Footer = ()=>{
    return(
        <div className="footer">
            <div className="top">
            <ArrowUpwardRoundedIcon />
                <p>Back to top</p>
            </div>
            <div className="orta">
                <div className='padd'>
                <FacebookRoundedIcon />
                </div>
                <div className='padd'>
                    <GitHubIcon />
                    </div>
                    <div className='padd'>
                    <InstagramIcon />
                    </div>
                    <div className='padd'>
                    <TelegramIcon />
                    </div>
                
            </div>
            <div className="past">
                <p>@2020 Tomasz Gajda All Rights Reserved.</p>
            </div>
        </div>
    )
}
export default Footer;