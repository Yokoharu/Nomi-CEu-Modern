//Pre Release
ServerEvents.recipes(event => {
    const excludedItems = ['draconicevolution:dislocation_inhibitor', 'draconicevolution:draconium_chest', 'draconicevolution:generator', 'draconicevolution:dislocator_pedestal', 'draconicevolution:creative_op_capacitor', 'draconicevolution:particle_generator', 'draconicevolution:grinder', 'draconicevolution:flux_gate', 'draconicevolution:reactor_prt_rotor_full', 'draconicevolution:fluid_gate', 'draconicevolution:crafting_core', 'draconicevolution:basic_crafting_injector', 'draconicevolution:wyvern_crafting_injector', 'draconicevolution:awakened_crafting_injector', 'draconicevolution:chaotic_crafting_injector', 'draconicevolution:energy_core', 'draconicevolution:energy_core_stabilizer', 'draconicevolution:energy_pylon', 'draconicevolution:reactor_core', 'draconicevolution:reactor_stabilizer', 'draconicevolution:infused_obsidian', 'draconicevolution:draconium_core', 'draconicevolution:wyvern_core', 'draconicevolution:awakened_core', 'draconicevolution:chaotic_core', 'draconicevolution:wyvern_energy_core', 'draconicevolution:draconic_energy_core', 'draconicevolution:dragon_heart', 'draconicevolution:chaos_shard', 'draconicevolution:large_chaos_frag', 'draconicevolution:medium_chaos_frag', 'draconicevolution:small_chaos_frag', 'draconicevolution:reactor_prt_stab_frame', 'draconicevolution:reactor_prt_in_rotor', 'draconicevolution:reactor_prt_out_rotor', 'draconicevolution:reactor_prt_focus_ring', 'draconicevolution:magnet', 'draconicevolution:advanced_magnet', Item.of('draconicevolution:dislocator', '{Damage:0}'), 'draconicevolution:advanced_dislocator', 'draconicevolution:wyvern_capacitor', 'draconicevolution:draconic_capacitor', 'draconicevolution:creative_capacitor']
    const regexPattern = new RegExp(`^(?!(${excludedItems.join('|')})$)draconicevolution:`, 'i')

    event.remove({ output: regexPattern })

    event.remove({output:['solarflux:sp_de.draconic', 'solarflux:sp_de.chaotic', 'solarflux:sp_de.wyvern', 'draconicevolution:energy_core_stabilizer', 'draconicevolution:draconic_energy_core', 'draconicevolution:wyvern_core']})

    event.shaped('draconicevolution:advanced_magnet', [
        'D D',
        'RMR',
        'ETE'
    ], {
        D: 'gtceu:draconium_ingot',
        E: 'gtceu:europium_ingot',
        M: 'draconicevolution:magnet',
        R: 'minecraft:redstone',
        T: 'draconicevolution:advanced_dislocator'
    }).id('draconicevolution:tools/advanced_magnet')

    event.shaped('draconicevolution:generator', [
        'AAA',
        'AZA',
        'BBB'
    ], {
        A: "gtceu:draconium_plate",
        B: "gtceu:stellite_100_block",
        Z: "gtceu:lv_machine_hull"
    }).id('draconicevolution:machines/generator')

})