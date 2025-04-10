import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { Checkbox, RadioButton } from 'react-native-paper';
import { businessOptions, sorting } from '~/app/api/sorting';
import { Button } from './Button';

const SortingScreen = ({ setApply}) => {
  const [active, setActive] = useState('sortby');
  const [checked, setChecked] = useState('recommendation');
  return (
    <View className="flex-1 px-5">
      <View className="flex-1">
        <View className="flex-row items-center justify-evenly">
          <TouchableOpacity>
            <Text style={{ fontSize: 20, color: active === 'sortby' ? '#2174EE' : '#333333' }}>
              Sort By
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ fontSize: 20, color: active === 'business' ? '#2174EE' : '#333333' }}>
              Business Option{' '}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ fontSize: 20, color: active === 'requirement' ? '#2174EE' : '#333333' }}>
              Requirements
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          {active === 'sortby' && (
            <View>
              <Text className="bg-[#F1FAFF66] py-3 text-xl font-bold">Sort By</Text>
              {sorting.map(({ icon, label, value }, index) => (
                <View className="flex-row items-center justify-between border-b-2 border-[#F1FAFF66] py-2" key={index}>
                  <View className="flex-row items-center gap-3">
                    <Image
                      source={icon}
                      style={{
                        tintColor: checked === value ? '#2174EE' : '#333333',
                        width: 25,
                        height: 25,
                      }}
                    />
                    <Text
                      className="text-lg font-semibold capitalize"
                      style={{ color: checked === value ? '#2174EE' : '#333333' }}>
                      {label}
                    </Text>
                  </View>
                  <RadioButton
                    value={value}
                    onPress={() => setChecked(value)}
                    status={checked === value ? 'checked' : 'unchecked'}
                    color="#2174EE"
                    uncheckedColor="#D9D9D9"
                  />
                </View>
              ))}

              <View>
                <Text className="bg-[#F1FAFF66] py-3 text-xl font-bold">Business Option</Text>
                {businessOptions.map(({ label, value }, index) => (
                  <View className="flex-row items-center justify-between border-b-2 border-[#F1FAFF66] py-2" key={index}>
                    <Text
                      className="text-lg font-semibold capitalize"
                      style={{ color: checked === value ? '#2174EE' : '#333333' }}>
                      {label}
                    </Text>
                    <Checkbox
                      onPress={() => setChecked(value)}
                      status={checked === value ? 'checked' : 'unchecked'}
                      color="#2174EE"
                      uncheckedColor="#D9D9D9"
                    />
                  </View>
                ))}
              </View>
            </View>
          )}
        </View>
      </View>

      <View className="mt-20 gap-5 pb-10">
        <Button title="Apply" className="rounded-xl bg-primary" onPress={() => setApply(true)} />
        <Button title="Reset" className="rounded-xl bg-[#D9D9D9]" color="#103A77" />
      </View>
    </View>
  );
};

export default SortingScreen;
