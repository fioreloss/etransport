import React, { useState } from "react"
import { Pressable, StyleSheet } from "react-native"
import { Text } from "ui"

export type SlotProps = {
    selected?: boolean
    start?: string,

}
export const Slot = (props: SlotProps) => {
    const { selected, start } = props
    const [select, setSelect] = useState<Boolean | undefined>(selected)
    return (
        <Pressable style={[styles.container, { backgroundColor: select ? '#ec8c85' : '#A0AEC0' }]} onPress={() => { setSelect(!select) }}>
            <Text variant={"H_3"}>leave at {start}</Text>
        </Pressable>
    )

}
const styles = StyleSheet.create({
    container: {
        width: '45%',
        flexDirection: 'row',
        padding: 18,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
    }
})