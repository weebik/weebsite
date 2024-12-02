import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import StarHalfRoundedIcon from '@mui/icons-material/StarHalfRounded';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import { Typography } from '@mui/material';

interface SkillProps {
    name: string;
    level: number;
    imgSrc: string;
}

function Skill({ name, level, imgSrc }: SkillProps) {
    const renderStars = (level: number) => {
        const fullStars = Math.floor(level);
        const hasHalfStar = level % 1 !== 0;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
        return (
            <>
                {Array.from({ length: fullStars }).map((_, index) => (
                    <StarRateRoundedIcon key={`full-${index}`} style={{ color: 'white' }} />
                ))}
                {hasHalfStar && <StarHalfRoundedIcon style={{ color: 'gold' }} />}
                {Array.from({ length: emptyStars }).map((_, index) => (
                    <StarBorderRoundedIcon key={`empty-${index}`} style={{ color: 'white' }} />
                ))}
            </>
        );
    };

    return (
        <div className="skill">
            <img src={imgSrc} alt={''} />
            <Typography>{name}</Typography>
            <div className='stars'>
                {renderStars(level)}
            </div>
        </div>
    );
}

export default Skill;