import * as React from 'react';
import { Card, ICardTokens, ICardSectionStyles, ICardSectionTokens } from '@uifabric/react-cards';
import {
  ActionButton,
  FontWeights,
  IButtonStyles,
  Icon,
  IIconStyles,
  Image,
  Persona,
  Stack,
  IStackTokens,
  Text,
  ITextStyles,
} from 'office-ui-fabric-react';
import SearchComponent from './SearchComponent'


const nameStyle: ITextStyles = {
    root: {
        color: '#025F52',
        fontWeight: FontWeights.semibold,
    }
}

const descriptionStyle: ITextStyles = {
    root: {
        color: '#333333',
        fontWeight: FontWeights.semibold,
    }
}
const helpfulTextStyles: ITextStyles = {
    root: {
        color: '#333333',
        fontWeight: FontWeights.regular,
    },
};

const footerCardSectionStyles: ICardSectionStyles = {
    root: {
        borderTop: '1px solid #F3F2F1',
    },
};
const iconStyles: IIconStyles = {
    root: {
        color: '#0078D4',
        fontSize: 16,
        fontWeight: FontWeights.regular,
    },
};

function CardComponent() {
    const footerCardSectionTokens: ICardSectionTokens = { padding: '12px 0px 0px' };
    const cardTokens: ICardTokens = { childrenMargin: 12 };
    const sectionStackTokens: IStackTokens = { childrenGap: 30 };
    const handleMoreIcon = () => {
        console.log("more details clicked ==>")
    }
    return (
        <div>
            <SearchComponent searchStyle={{}} />
            <Stack style={{padding:20}}>
                <Card tokens={cardTokens} aria-label="Clickable vertical card with image bleeding at the center of the card">
                    <Card.Item>
                        <Persona text="Kevin Jameson" secondaryText="Feb 2, 2019" />
                    </Card.Item>
                    <Card.Item fill>
                        <Image src="https://placehold.it/256x144" width="100%" alt="Placeholder image." />
                    </Card.Item>
                    <Card.Section>
                        <Text variant="small" styles={nameStyle} >
                            Lorem ipsum dolor
                        </Text>
                        <Text styles={descriptionStyle}>
                            Ut iaculis ligula ac orci venenatis pulvinar.
                        </Text>
                        <Text variant="medium" styles={helpfulTextStyles}>
                            Morbi ornare massa eleifend mi facilisis scelerisque
                        </Text>
                    </Card.Section>
                    <Card.Section horizontal styles={footerCardSectionStyles} tokens={footerCardSectionTokens}>
                        <Icon iconName="RedEye" styles={iconStyles} />
                        <Icon iconName="SingleBookmark" styles={iconStyles} />
                        <Stack.Item grow={1}>
                            <span />
                        </Stack.Item>
                        <Icon iconName="MoreVertical" styles={iconStyles} onClick={handleMoreIcon} />
                    </Card.Section>
                </Card>
            </Stack>
        </div>
    )
}

export default CardComponent;